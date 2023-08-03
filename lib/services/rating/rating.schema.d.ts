import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const ratingSchema: {
    readonly $id: "Rating";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "userId", "productId", "rating"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly rating: {
            readonly type: "number";
        };
        readonly userId: {
            readonly type: "string";
        };
        readonly productId: {
            readonly type: "string";
        };
    };
};
export type Rating = FromSchema<typeof ratingSchema>;
export declare const ratingValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const ratingResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    rating: number;
    userId: string;
    productId: string;
}, HookContext>;
export declare const ratingExternalResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    rating: number;
    userId: string;
    productId: string;
}, HookContext>;
export declare const ratingDataSchema: {
    readonly $id: "RatingData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["rating"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly rating: {
            readonly type: "number";
        };
        readonly userId: {
            readonly type: "string";
        };
        readonly productId: {
            readonly type: "string";
        };
    };
};
export type RatingData = FromSchema<typeof ratingDataSchema>;
export declare const ratingDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const ratingDataResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    userId?: string | undefined;
    productId?: string | undefined;
    rating: number;
}, HookContext>;
export declare const ratingPatchSchema: {
    readonly $id: "RatingPatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly rating: {
            readonly type: "number";
        };
        readonly userId: {
            readonly type: "string";
        };
        readonly productId: {
            readonly type: "string";
        };
    };
};
export type RatingPatch = FromSchema<typeof ratingPatchSchema>;
export declare const ratingPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const ratingPatchResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    rating?: number | undefined;
    userId?: string | undefined;
    productId?: string | undefined;
}, HookContext>;
export declare const ratingQuerySchema: {
    readonly $id: "RatingQuery";
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
                readonly rating: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly userId: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly productId: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "rating" | "userId" | "productId")[] | undefined;
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
                    readonly rating: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly userId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly productId: import("@feathersjs/schema").PropertyQuery<{
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
                    readonly rating: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly userId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly productId: import("@feathersjs/schema").PropertyQuery<{
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
                                readonly rating: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "number";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly userId: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly productId: import("@feathersjs/schema").PropertyQuery<{
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
        readonly rating: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly userId: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly productId: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
    };
};
export type RatingQuery = FromSchema<typeof ratingQuerySchema>;
export declare const ratingQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const ratingQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $select?: string[] | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        rating?: 1 | -1 | undefined;
        userId?: 1 | -1 | undefined;
        productId?: 1 | -1 | undefined;
    } | undefined;
    $or?: {
        id?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        rating?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        userId?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        productId?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    $and?: {
        id?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        $or?: {
            id?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            rating?: number | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            userId?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            productId?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
        rating?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        userId?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        productId?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    rating?: number | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    userId?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    productId?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
}, HookContext>;
