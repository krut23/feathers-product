"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.RatingService = void 0;
const knex_1 = require("@feathersjs/knex");
const errors_1 = require("@feathersjs/errors");
const uuid_1 = require("uuid");
class RatingService extends knex_1.KnexService {
    async create(data, params) {
        const { productId, rating } = data;
        const userId = params?.user?.id;
        if (!userId) {
            throw new errors_1.BadRequest('You must be logged in to submit a rating.');
        }
        // Check if the user has already rated the product
        const existingRating = await this._find({
            query: {
                productId,
                userId
            }
        });
        if (existingRating.total > 0) {
            throw new errors_1.Conflict('You have already rated this product.');
        }
        const uuid = (0, uuid_1.v4)();
        const ratingWithId = { ...data, id: uuid, userId, productId, rating };
        return super.create(ratingWithId, params);
    }
    async find(params) {
        return super.find(params);
    }
    async get(id, params) {
        const rating = await super.get(id, params);
        if (!rating) {
            throw new errors_1.NotFound('Rating not found.');
        }
        return rating;
    }
    async patch(id, data, params) {
        const { productId, rating } = data;
        const userId = params?.user?.id;
        if (!userId) {
            throw new errors_1.BadRequest('You must be logged in to update a rating.');
        }
        // Check if the rating exists
        const existingRating = await this._get(id);
        if (!existingRating) {
            throw new errors_1.BadRequest('Rating not found.');
        }
        // Check if the user owns the rating and can update it
        if (existingRating.userId !== userId) {
            throw new errors_1.BadRequest('You are not authorized to update this rating.');
        }
        const updatedRating = { ...existingRating, productId, rating };
        return super.patch(id, updatedRating, params);
    }
    async remove(id, params) {
        const userId = params?.user?.id;
        if (!userId) {
            throw new errors_1.BadRequest('You must be logged in to delete a rating.');
        }
        // Check if the rating exists
        const existingRating = await this._get(id);
        if (!existingRating) {
            throw new errors_1.BadRequest('Rating not found.');
        }
        // Check if the user owns the rating and can delete it
        if (existingRating.userId !== userId) {
            throw new errors_1.BadRequest('You are not authorized to delete this rating.');
        }
        return super.remove(id, params);
    }
}
exports.RatingService = RatingService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'rating'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=rating.class.js.map