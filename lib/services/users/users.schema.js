"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQueryResolver = exports.userQueryValidator = exports.userQuerySchema = exports.userPatchResolver = exports.userPatchValidator = exports.userPatchSchema = exports.userDataResolver = exports.userDataValidator = exports.userDataSchema = exports.userExternalResolver = exports.userResolver = exports.userValidator = exports.userSchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const authentication_local_1 = require("@feathersjs/authentication-local");
const validators_1 = require("../../validators");
// Main data model schema
exports.userSchema = {
    $id: 'User',
    type: 'object',
    additionalProperties: false,
    required: ['id', 'email', 'password'],
    properties: {
        id: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
    }
};
exports.userValidator = (0, schema_1.getValidator)(exports.userSchema, validators_1.dataValidator);
exports.userResolver = (0, schema_1.resolve)({});
exports.userExternalResolver = (0, schema_1.resolve)({
    // The password should never be visible externally
    password: async () => undefined
});
// Schema for creating new data
exports.userDataSchema = {
    $id: 'UserData',
    type: 'object',
    additionalProperties: false,
    required: ['email'],
    properties: {
        ...exports.userSchema.properties
    }
};
exports.userDataValidator = (0, schema_1.getValidator)(exports.userDataSchema, validators_1.dataValidator);
exports.userDataResolver = (0, schema_1.resolve)({
    password: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
});
// Schema for updating existing data
exports.userPatchSchema = {
    $id: 'UserPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.userSchema.properties
    }
};
exports.userPatchValidator = (0, schema_1.getValidator)(exports.userPatchSchema, validators_1.dataValidator);
exports.userPatchResolver = (0, schema_1.resolve)({
    password: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
});
// Schema for allowed query properties
exports.userQuerySchema = {
    $id: 'UserQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(exports.userSchema.properties)
    }
};
exports.userQueryValidator = (0, schema_1.getValidator)(exports.userQuerySchema, validators_1.queryValidator);
exports.userQueryResolver = (0, schema_1.resolve)({
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    id: async (value, user, context) => {
        if (context.params.user) {
            return context.params.user.id;
        }
        return value;
    }
});
//# sourceMappingURL=users.schema.js.map