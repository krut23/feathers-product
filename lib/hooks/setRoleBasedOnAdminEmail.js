"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoleBasedOnAdminEmail = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../../config.env' });
async function setRoleBasedOnAdminEmail(context) {
    const { app, data } = context;
    const adminEmailPattern = process.env.ADMIN_EMAIL ? new RegExp(process.env.ADMIN_EMAIL) : undefined;
    if (adminEmailPattern && adminEmailPattern.test(data.email)) {
        // If user's email matches the admin email pattern, set role as "admin"
        context.data.role = 'admin';
    }
    else {
        // Otherwise, set role as "customer"
        context.data.role = 'customer';
    }
    return context;
}
exports.setRoleBasedOnAdminEmail = setRoleBasedOnAdminEmail;
//# sourceMappingURL=setRoleBasedOnAdminEmail.js.map