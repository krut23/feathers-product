import Joi from 'joi';
import { HookContext } from '@feathersjs/feathers';
export declare const categorySchema: Joi.ObjectSchema<any>;
export declare const updateCategorySchema: Joi.ObjectSchema<any>;
export declare const getcategorySchema: Joi.ObjectSchema<any>;
export declare const ratingValidation: import("@feathersjs/feathers").Hook;
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
