"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const sequelize_2 = __importDefault(require("../sequelize"));
const category_model_1 = __importDefault(require("./category.model"));
const users_model_1 = __importDefault(require("./users.model"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: () => (0, uuid_1.v4)(),
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: category_model_1.default,
            key: 'id'
        },
    },
    averageRatings: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    createdBy: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: users_model_1.default,
            key: 'id'
        }
    },
    updatedBy: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: users_model_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: sequelize_2.default,
    timestamps: false,
    modelName: 'product',
    tableName: 'product'
});
Product.belongsTo(category_model_1.default, {
    foreignKey: 'categoryId',
    as: 'category'
});
exports.default = Product;
//# sourceMappingURL=product.model.js.map