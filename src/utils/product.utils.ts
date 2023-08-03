import  Product  from '../models/product.model'

export interface Rating {
  rating: number
}

export async function calculateAverageRating(product: Product, ratings: Rating[]): Promise<void> {
  const totalRatings = ratings.length
  const sumRatings = ratings.reduce((sum, rating) => sum + rating.rating, 0)
  const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0

  // Update the product with the calculated average rating and total ratings
  product.averageRatings = averageRating

  await product.save()
}
