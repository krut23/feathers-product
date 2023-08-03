"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.UserService = void 0;
const knex_1 = require("@feathersjs/knex");
const uuid_1 = require("uuid");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class UserService extends knex_1.KnexService {
    async create(data, params) {
        const uuid = (0, uuid_1.v4)();
        const userWithId = { ...data, id: uuid };
        return super.create(userWithId, params);
    }
    async update(id, data, params) {
        return super.patch(id, data, params);
    }
    async remove(id, params) {
        return super.remove(id, params);
    }
}
exports.UserService = UserService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'users'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=users.class.js.map