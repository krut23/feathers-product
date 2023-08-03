"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ProductService = void 0;
const knex_1 = require("@feathersjs/knex");
const uuid_1 = require("uuid");
const category_model_1 = __importDefault(require("../../models/category.model"));
const errors_1 = require("@feathersjs/errors");
class ProductService extends knex_1.KnexService {
    async create(data, params) {
        const uuid = (0, uuid_1.v4)();
        const productWithId = { ...data, id: uuid };
        // categoryId if not provided
        if (!productWithId.categoryId) {
            throw new errors_1.BadRequest('categoryId is required.');
        }
        // Check if the provided categoryId exists in the Category model
        const category = await category_model_1.default.findOne({
            where: {
                id: productWithId.categoryId
            }
        });
        if (!category) {
            throw new errors_1.Conflict('Category with the provided categoryId not found.');
        }
        // Set the categoryId to the id of the Category model
        productWithId.categoryId = category.id;
        return super.create(productWithId, params);
    }
    async find(params) {
        return super.find(params);
    }
    async get(id, params) {
        const product = await super.get(id, params);
        if (!product) {
            throw new errors_1.NotFound('Product not found.');
        }
        return product;
    }
    async patch(id, data, params) {
        // categoryId if provided
        if (data.categoryId) {
            // Check if the provided categoryId exists in the Category model
            const category = await category_model_1.default.findOne({
                where: {
                    id: data.categoryId
                }
            });
            if (!category) {
                throw new errors_1.Conflict('Category with the provided categoryId not found.');
            }
            // Set the categoryId to the id of the Category model
            data.categoryId = category.id;
        }
        return super.patch(id, data, params);
    }
    async remove(id, params) {
        return super.remove(id, params);
    }
}
exports.ProductService = ProductService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'product'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=product.class.js.map