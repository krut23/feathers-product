import { Model, DataTypes } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '../sequelize'


class Category extends Model {
  public id!: string
  public name!: string
  public createdBy!: string
  public updatedBy!: string
}

Category.init(
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
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false
    },
    updatedBy: {
      type: DataTypes.UUID,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'category',
    tableName: 'category'
  }
)

export default Category
