import Product from '../models/product.model';
export interface Rating {
    rating: number;
}
export declare function calculateAverageRating(product: Product, ratings: Rating[]): Promise<void>;
