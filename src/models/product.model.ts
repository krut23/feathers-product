import { Model, DataTypes } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '../sequelize'
import Category from './category.model'
import  User  from './users.model'

class Product extends Model {
  public id!: string
  public name!: string
  public description!: string
  public createdBy!: string
  public updatedBy!: string
  public averageRatings!: number
  
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Category,
        key: 'id'
      },
    },
    averageRatings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    modelName: 'product',
    tableName: 'product'
  }
)

Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category'
})

export default Product
