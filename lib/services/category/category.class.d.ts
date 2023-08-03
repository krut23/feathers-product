import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Category, CategoryData, CategoryPatch, CategoryQuery } from './category.schema';
export type { Category, CategoryData, CategoryPatch, CategoryQuery };
export interface CategoryParams extends KnexAdapterParams<CategoryQuery> {
}
export declare class CategoryService<ServiceParams extends Params = CategoryParams> extends KnexService<Category, CategoryData, CategoryParams, CategoryPatch> {
    create(data: any, params?: ServiceParams): Promise<any>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
