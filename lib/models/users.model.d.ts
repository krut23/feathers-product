import { Model } from 'sequelize';
declare class User extends Model {
    id: string;
    email: string;
    password: string;
    role: string;
}
export default User;
