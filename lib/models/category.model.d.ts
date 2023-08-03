import { Model } from 'sequelize';
declare class Category extends Model {
    id: string;
    name: string;
    createdBy: string;
    updatedBy: string;
}
export default Category;
