"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const schema_1 = require("@feathersjs/schema");
const rating_schema_1 = require("./rating.schema");
const rating_joi_1 = require("./rating.joi");
const setCreatedByandUpdatedBy_1 = require("../../hooks/setCreatedByandUpdatedBy");
const feathers_hooks_common_1 = require("feathers-hooks-common");
exports.default = {
    around: {
        all: [
            (0, authentication_1.authenticate)('jwt'),
            schema_1.hooks.resolveExternal(rating_schema_1.ratingExternalResolver),
            schema_1.hooks.resolveResult(rating_schema_1.ratingResolver)
        ]
    },
    before: {
        all: [(0, authentication_1.authenticate)('jwt'), (0, setCreatedByandUpdatedBy_1.setCreatedByAndUpdatedBy)()],
        find: [feathers_validate_joi_1.default.form(rating_joi_1.getratingSchema, rating_joi_1.joiReadOptions)],
        get: [feathers_validate_joi_1.default.form(rating_joi_1.getratingSchema, rating_joi_1.joiReadOptions)],
        create: [feathers_validate_joi_1.default.form(rating_joi_1.createratingSchema, rating_joi_1.joiOptions)],
        patch: [feathers_validate_joi_1.default.form(rating_joi_1.updateratingSchema, rating_joi_1.joiOptions)],
        remove: [(0, feathers_hooks_common_1.disallow)('external')]
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=rating.hooks.js.map