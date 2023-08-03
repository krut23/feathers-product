import Joi from 'joi';
import { HookContext } from '@feathersjs/feathers';
export declare const createProductSchema: Joi.ObjectSchema<any>;
export declare const updateProductSchema: Joi.ObjectSchema<any>;
export declare const getProductSchema: Joi.ObjectSchema<any>;
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
