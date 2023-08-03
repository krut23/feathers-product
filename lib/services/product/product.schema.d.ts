import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const productSchema: {
    readonly $id: "Product";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "name", "description", "categoryId"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly categoryId: {
            readonly type: "string";
        };
    };
};
export type Product = FromSchema<typeof productSchema>;
export declare const productValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const productResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
    description: string;
    categoryId: string;
}, HookContext>;
export declare const productExternalResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
    description: string;
    categoryId: string;
}, HookContext>;
export declare const productDataSchema: {
    readonly $id: "ProductData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly categoryId: {
            readonly type: "string";
        };
    };
};
export type ProductData = FromSchema<typeof productDataSchema>;
export declare const productDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const productDataResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    categoryId?: string | undefined;
}, HookContext>;
export declare const productPatchSchema: {
    readonly $id: "ProductPatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly categoryId: {
            readonly type: "string";
        };
    };
};
export type ProductPatch = FromSchema<typeof productPatchSchema>;
export declare const productPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const productPatchResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    categoryId?: string | undefined;
}, HookContext>;
export declare const productQuerySchema: {
    readonly $id: "ProductQuery";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly $limit: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $skip: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $sort: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly name: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly description: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly categoryId: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "name" | "description" | "categoryId")[] | undefined;
                readonly type: "string";
            };
        };
        readonly $or: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly name: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly description: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly categoryId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                };
            };
        };
        readonly $and: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly name: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly description: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly categoryId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                } & {
                    readonly $or: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                            readonly properties: {
                                readonly id: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly name: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly description: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly categoryId: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                            };
                        };
                    };
                };
            };
        };
        readonly id: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly name: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly description: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly categoryId: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
    };
};
export type ProductQuery = FromSchema<typeof productQuerySchema>;
export declare const productQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const productQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    name?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    description?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $select?: string[] | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        name?: 1 | -1 | undefined;
        description?: 1 | -1 | undefined;
        categoryId?: 1 | -1 | undefined;
    } | undefined;
    $or?: {
        id?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        name?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        description?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        categoryId?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    $and?: {
        id?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        name?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        description?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        $or?: {
            id?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            name?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            description?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            categoryId?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
        categoryId?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    categoryId?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
}, HookContext>;
