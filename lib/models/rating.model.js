"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const sequelize_2 = __importDefault(require("../sequelize"));
const product_model_1 = __importDefault(require("./product.model"));
const users_model_1 = __importDefault(require("./users.model"));
class Rating extends sequelize_1.Model {
}
Rating.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: () => (0, uuid_1.v4)(),
        primaryKey: true
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: users_model_1.default,
            key: 'id'
        }
    },
    productId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: product_model_1.default,
            key: 'id'
        }
    },
    rating: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
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
    modelName: 'rating',
    tableName: 'rating'
});
Rating.belongsTo(product_model_1.default, {
    foreignKey: 'productId',
    as: 'product'
});
Rating.belongsTo(users_model_1.default, {
    foreignKey: 'userId',
    as: 'users'
});
exports.default = Rating;
//# sourceMappingURL=rating.model.js.map