"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCreatedByAndUpdatedBy = void 0;
const setCreatedByAndUpdatedBy = () => (context) => {
    const { user } = context.params;
    if (user) {
        if (context.method === 'create') {
            context.data.createdBy = user.id;
            context.data.updatedBy = user.id;
        }
        else if (context.method === 'update' || context.method === 'patch') {
            context.data.updatedBy = user.id;
        }
    }
};
exports.setCreatedByAndUpdatedBy = setCreatedByAndUpdatedBy;
//# sourceMappingURL=setCreatedByandUpdatedBy.js.map