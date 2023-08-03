import Joi from 'joi';
import { HookContext } from '@feathersjs/feathers';
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const getUserSchema: Joi.ObjectSchema<any>;
export declare const userValidation: import("@feathersjs/feathers").Hook;
export declare const joiOptions: {
    errors: {
        wrap: {
            label: string;
        };
    };
    convert: boolean;
    abortEarly: boolean;
};
export declare const joiReadOptions: {
    getContext(context: HookContext): any;
    setContext(context: HookContext, newValues: any): void;
    errors: {
        wrap: {
            label: string;
        };
    };
    convert: boolean;
    abortEarly: boolean;
};
