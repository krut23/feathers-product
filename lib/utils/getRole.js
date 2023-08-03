"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../../config.env' });
function getRole(email) {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && new RegExp(adminEmail).test(email)) {
        return 'admin';
    }
    else {
        return 'customer';
    }
}
//# sourceMappingURL=getRole.js.map