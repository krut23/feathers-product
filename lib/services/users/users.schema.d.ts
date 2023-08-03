import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const userSchema: {
    readonly $id: "User";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "email", "password"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
    };
};
export type User = FromSchema<typeof userSchema>;
export declare const userValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    email: string;
    password: string;
}, HookContext>;
export declare const userExternalResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    email: string;
    password: string;
}, HookContext>;
export declare const userDataSchema: {
    readonly $id: "UserData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["email"];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
    };
};
export type UserData = FromSchema<typeof userDataSchema>;
export declare const userDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userDataResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    password?: string | undefined;
    email: string;
}, HookContext>;
export declare const userPatchSchema: {
    readonly $id: "UserPatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly password: {
            readonly type: "string";
        };
    };
};
export type UserPatch = FromSchema<typeof userPatchSchema>;
export declare const userPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userPatchResolver: import("@feathersjs/schema").Resolver<{
    id?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, HookContext>;
export declare const userQuerySchema: {
    readonly $id: "UserQuery";
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
                readonly email: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly password: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "email" | "password")[] | undefined;
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
                    readonly email: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly password: import("@feathersjs/schema").PropertyQuery<{
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
                    readonly email: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly password: import("@feathersjs/schema").PropertyQuery<{
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
                                readonly email: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly password: import("@feathersjs/schema").PropertyQuery<{
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
        readonly email: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly password: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
    };
};
export type UserQuery = FromSchema<typeof userQuerySchema>;
export declare const userQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const userQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    email?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    password?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $select?: string[] | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        email?: 1 | -1 | undefined;
        password?: 1 | -1 | undefined;
    } | undefined;
    $or?: {
        id?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        email?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        password?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    $and?: {
        id?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        email?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        password?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        $or?: {
            id?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            email?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            password?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
    }[] | undefined;
}, HookContext>;
