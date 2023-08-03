"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.ratingValidation = exports.getcategorySchema = exports.updateCategorySchema = exports.categorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const name = joi_1.default.string().required();
const createdBy = joi_1.default.string().required();
const updatedBy = joi_1.default.string().required();
const $select = joi_1.default.string().strip();
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.categorySchema = joi_1.default.object().keys({
    name,
    createdBy,
    updatedBy
});
exports.updateCategorySchema = joi_1.default.object().keys({
    name,
    updatedBy
});
exports.getcategorySchema = joi_1.default.object().keys({
    limit,
    skip,
    $select
});
exports.ratingValidation = feathers_validate_joi_1.default.form(exports.categorySchema);
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
//# sourceMappingURL=category.joi.js.map