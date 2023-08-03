"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productClient = exports.productMethods = exports.productPath = void 0;
exports.productPath = 'product';
exports.productMethods = ['find', 'get', 'create', 'patch', 'remove'];
const productClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.productPath, connection.service(exports.productPath), {
        methods: exports.productMethods
    });
};
exports.productClient = productClient;
//# sourceMappingURL=product.shared.js.map