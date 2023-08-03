import { Model, DataTypes } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '../sequelize'
import Product from './product.model'
import User  from './users.model'

class Rating extends Model {
  public id!: string
  public userId!: string
  public productId!: string
  public rating!: number
  public createdBy!: string
  public updatedBy!: string
}

Rating.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    updatedBy: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'rating',
    tableName: 'rating'
  }
)

Rating.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product'
})

Rating.belongsTo(User,{
  foreignKey: 'userId',
  as : 'users'
})

export default Rating
