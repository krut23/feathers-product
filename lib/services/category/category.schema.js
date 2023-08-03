"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryQueryResolver = exports.categoryQueryValidator = exports.categoryQuerySchema = exports.categoryPatchResolver = exports.categoryPatchValidator = exports.categoryPatchSchema = exports.categoryDataResolver = exports.categoryDataValidator = exports.categoryDataSchema = exports.categoryExternalResolver = exports.categoryResolver = exports.categoryValidator = exports.categorySchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const validators_1 = require("../../validators");
// Main data model schema
exports.categorySchema = {
    $id: 'Category',
    type: 'object',
    additionalProperties: false,
    required: ['id', 'name'],
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
};
exports.categoryValidator = (0, schema_1.getValidator)(exports.categorySchema, validators_1.dataValidator);
exports.categoryResolver = (0, schema_1.resolve)({});
exports.categoryExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new data
exports.categoryDataSchema = {
    $id: 'CategoryData',
    type: 'object',
    additionalProperties: false,
    required: ['name'],
    properties: {
        ...exports.categorySchema.properties
    }
};
exports.categoryDataValidator = (0, schema_1.getValidator)(exports.categoryDataSchema, validators_1.dataValidator);
exports.categoryDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing data
exports.categoryPatchSchema = {
    $id: 'CategoryPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.categorySchema.properties
    }
};
exports.categoryPatchValidator = (0, schema_1.getValidator)(exports.categoryPatchSchema, validators_1.dataValidator);
exports.categoryPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.categoryQuerySchema = {
    $id: 'CategoryQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(exports.categorySchema.properties)
    }
};
exports.categoryQueryValidator = (0, schema_1.getValidator)(exports.categoryQuerySchema, validators_1.queryValidator);
exports.categoryQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=category.schema.js.map