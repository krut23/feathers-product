import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const categorySchema: {
    readonly $id: "Category";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "name"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
    };
};
export type Category = FromSchema<typeof categorySchema>;
export declare const categoryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
}, HookContext>;
export declare const categoryExternalResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    name: string;
}, HookContext>;
export declare const categoryDataSchema: {
    readonly $id: "CategoryData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["name"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
    };
};
export type CategoryData = FromSchema<typeof categoryDataSchema>;
export declare const categoryDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryDataResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    name: string;
}, HookContext>;
export declare const categoryPatchSchema: {
    readonly $id: "CategoryPatch";
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
    };
};
export type CategoryPatch = FromSchema<typeof categoryPatchSchema>;
export declare const categoryPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryPatchResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    name?: string | undefined;
}, HookContext>;
export declare const categoryQuerySchema: {
    readonly $id: "CategoryQuery";
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
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "name")[] | undefined;
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
    };
};
export type CategoryQuery = FromSchema<typeof categoryQuerySchema>;
export declare const categoryQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const categoryQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    name?: string | {
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
        $or?: {
            id?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            name?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
    }[] | undefined;
}, HookContext>;
