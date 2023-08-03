"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryClient = exports.categoryMethods = exports.categoryPath = void 0;
exports.categoryPath = 'category';
exports.categoryMethods = ['find', 'get', 'create', 'patch', 'remove'];
const categoryClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.categoryPath, connection.service(exports.categoryPath), {
        methods: exports.categoryMethods
    });
};
exports.categoryClient = categoryClient;
//# sourceMappingURL=category.shared.js.map