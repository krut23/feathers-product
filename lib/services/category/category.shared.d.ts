import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Category, CategoryData, CategoryPatch, CategoryQuery, CategoryService } from './category.class';
export type { Category, CategoryData, CategoryPatch, CategoryQuery };
export type CategoryClientService = Pick<CategoryService<Params<CategoryQuery>>, (typeof categoryMethods)[number]>;
export declare const categoryPath = "category";
export declare const categoryMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const categoryClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [categoryPath]: CategoryClientService;
    }
}
