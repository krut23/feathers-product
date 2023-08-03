import { Model } from 'sequelize';
declare class Product extends Model {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    updatedBy: string;
    averageRatings: number;
}
export default Product;
