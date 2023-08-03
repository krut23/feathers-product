"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.ratingValidation = exports.getratingSchema = exports.updateratingSchema = exports.createratingSchema = exports.ratingSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const userId = joi_1.default.string().uuid().required();
const productId = joi_1.default.string().uuid().required();
const rating = joi_1.default.number().min(0).max(5).required();
const createdBy = joi_1.default.string().required();
const updatedBy = joi_1.default.string().required();
const $select = joi_1.default.string().strip();
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.ratingSchema = joi_1.default.object().keys({
    userId,
    productId,
    rating,
    createdBy,
    updatedBy
});
exports.createratingSchema = joi_1.default.object().keys({
    productId,
    rating,
    createdBy,
    updatedBy
});
exports.updateratingSchema = joi_1.default.object().keys({
    productId,
    rating,
    updatedBy
});
exports.getratingSchema = joi_1.default.object().keys({
    limit,
    skip,
    $select
});
exports.ratingValidation = feathers_validate_joi_1.default.form(exports.ratingSchema);
exports.joiOptions = {
    errors: {
        wrap: {
            label: ''
        }
    },
    convert: true,
    abortEarly: false
};
exports.joiReadOptions = {
    getContext(context) {
        return context.params.query;
    },
    setContext(context, newValues) {
        Object.assign(context.params.query ?? {}, newValues);
    },
    errors: {
        wrap: {
            label: ''
        }
    },
    convert: true,
    abortEarly: false
};
//# sourceMappingURL=rating.joi.js.map