"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const category_1 = require("./category/category");
const product_1 = require("./product/product");
const rating_1 = require("./rating/rating");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(category_1.category);
    app.configure(product_1.product);
    app.configure(rating_1.rating);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map