"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowEditOwnRatingOnly = void 0;
const errors_1 = require("@feathersjs/errors");
const allowEditOwnRatingOnly = () => {
    return async (context) => {
        const userId = context.params?.user?.id;
        const { id } = context;
        if (!userId) {
            throw new errors_1.Forbidden('You must be logged in to update your rating.');
        }
        // Fetch the existing rating
        const existingRating = await context.service._get(id);
        // Check if the user is the creator of the rating
        if (existingRating.userId !== userId) {
            throw new errors_1.Forbidden('You can only edit your own rating.');
        }
    };
};
exports.allowEditOwnRatingOnly = allowEditOwnRatingOnly;
//# sourceMappingURL=allowEditOwnRatingOnly.js.map