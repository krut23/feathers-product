"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productQueryResolver = exports.productQueryValidator = exports.productQuerySchema = exports.productPatchResolver = exports.productPatchValidator = exports.productPatchSchema = exports.productDataResolver = exports.productDataValidator = exports.productDataSchema = exports.productExternalResolver = exports.productResolver = exports.productValidator = exports.productSchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const validators_1 = require("../../validators");
// Main data model schema
exports.productSchema = {
    $id: 'Product',
    type: 'object',
    additionalProperties: false,
    required: ['id', 'name', 'description', 'categoryId'],
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        categoryId: { type: 'string' }
    }
};
exports.productValidator = (0, schema_1.getValidator)(exports.productSchema, validators_1.dataValidator);
exports.productResolver = (0, schema_1.resolve)({});
exports.productExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new data
exports.productDataSchema = {
    $id: 'ProductData',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.productSchema.properties
    }
};
exports.productDataValidator = (0, schema_1.getValidator)(exports.productDataSchema, validators_1.dataValidator);
exports.productDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing data
exports.productPatchSchema = {
    $id: 'ProductPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.productSchema.properties
    }
};
exports.productPatchValidator = (0, schema_1.getValidator)(exports.productPatchSchema, validators_1.dataValidator);
exports.productPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.productQuerySchema = {
    $id: 'ProductQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(exports.productSchema.properties)
    }
};
exports.productQueryValidator = (0, schema_1.getValidator)(exports.productQuerySchema, validators_1.queryValidator);
exports.productQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=product.schema.js.map