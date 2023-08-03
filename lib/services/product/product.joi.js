"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.getProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const name = joi_1.default.string().required();
const description = joi_1.default.string().required();
const categoryId = joi_1.default.string().uuid().required();
const createdBy = joi_1.default.string().required();
const updatedBy = joi_1.default.string().required();
const $select = joi_1.default.string().strip();
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.createProductSchema = joi_1.default.object().keys({
    name,
    description,
    createdBy,
    updatedBy,
    categoryId
});
exports.updateProductSchema = joi_1.default.object().keys({
    name,
    description,
    updatedBy,
    categoryId
});
exports.getProductSchema = joi_1.default.object().keys({
    limit,
    skip,
    $select
});
exports.joiOptions = {
    errors: {
        wrap: {
            label: ''
        }
    },
    convert: true,
    abortEarly: false
};
exports.joiReadOptions = {
    getContext(context) {
        return context.params.query;
    },
    setContext(context, newValues) {
        Object.assign(context.params.query ?? {}, newValues);
    },
    errors: {
        wrap: {
            label: ''
        }
    },
    convert: true,
    abortEarly: false
};
//# sourceMappingURL=product.joi.js.map