"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverageRating = void 0;
async function calculateAverageRating(product, ratings) {
    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;
    // Update the product with the calculated average rating and total ratings
    product.averageRatings = averageRating;
    await product.save();
}
exports.calculateAverageRating = calculateAverageRating;
//# sourceMappingURL=product.utils.js.map