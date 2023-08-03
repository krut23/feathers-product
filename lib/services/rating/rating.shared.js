"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingClient = exports.ratingMethods = exports.ratingPath = void 0;
exports.ratingPath = 'rating';
exports.ratingMethods = ['find', 'get', 'create', 'patch', 'remove'];
const ratingClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.ratingPath, connection.service(exports.ratingPath), {
        methods: exports.ratingMethods
    });
};
exports.ratingClient = ratingClient;
//# sourceMappingURL=rating.shared.js.map