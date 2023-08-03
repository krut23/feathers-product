import { Model } from 'sequelize';
declare class Rating extends Model {
    id: string;
    userId: string;
    productId: string;
    rating: number;
    createdBy: string;
    updatedBy: string;
}
export default Rating;
