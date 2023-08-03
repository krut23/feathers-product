"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const users_class_1 = require("./users.class");
const users_hooks_1 = __importDefault(require("./users.hooks"));
const users_shared_1 = require("./users.shared");
__exportStar(require("./users.class"), exports);
__exportStar(require("./users.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const user = (app) => {
    // Register our service on the Feathers application
    app.use(users_shared_1.userPath, new users_class_1.UserService((0, users_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: users_shared_1.userMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(users_shared_1.userPath).hooks(users_hooks_1.default);
};
exports.user = user;
//# sourceMappingURL=users.js.map