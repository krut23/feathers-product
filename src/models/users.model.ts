import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'
import { v4 as uuidv4 } from 'uuid'


class User extends Model {
  public id!: string;
  public email!: string
  public password!: string
  public role!: string
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'customer'),
      allowNull: false
    }
  },
  {
    tableName: 'users',
    sequelize,
    timestamps: false
  }
)

export default User