"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOnly = void 0;
const errors_1 = require("@feathersjs/errors");
const adminOnly = (context) => {
    const { user } = context.params;
    if (!user || user.role !== 'admin') {
        throw new errors_1.Forbidden('Only admin users are authorized to create and manage products.');
    }
};
exports.adminOnly = adminOnly;
//# sourceMappingURL=checkAdminUser.js.map