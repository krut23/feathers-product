"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const users_joi_1 = require("./users.joi");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const users_schema_1 = require("./users.schema");
const feathers_hooks_common_1 = require("feathers-hooks-common");
const setRoleBasedOnAdminEmail_1 = require("../../hooks/setRoleBasedOnAdminEmail");
exports.default = {
    around: {
        all: [schema_1.hooks.resolveExternal(users_schema_1.userExternalResolver), schema_1.hooks.resolveResult(users_schema_1.userResolver)],
        find: [(0, authentication_1.authenticate)('jwt')],
        get: [(0, authentication_1.authenticate)('jwt')],
        create: [],
        update: [(0, authentication_1.authenticate)('jwt')],
        patch: [(0, authentication_1.authenticate)('jwt')],
        remove: [(0, authentication_1.authenticate)('jwt')]
    },
    before: {
        all: [],
        find: [feathers_validate_joi_1.default.form(users_joi_1.getUserSchema, users_joi_1.joiReadOptions)],
        get: [feathers_validate_joi_1.default.form(users_joi_1.getUserSchema, users_joi_1.joiReadOptions)],
        create: [feathers_validate_joi_1.default.form(users_joi_1.userSchema, users_joi_1.joiOptions), setRoleBasedOnAdminEmail_1.setRoleBasedOnAdminEmail],
        patch: [feathers_validate_joi_1.default.form(users_joi_1.userSchema, users_joi_1.joiOptions)],
        remove: [(0, feathers_hooks_common_1.disallow)('external')]
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=users.hooks.js.map