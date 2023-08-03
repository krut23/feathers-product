import type { Paginated, Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Product, ProductData, ProductPatch, ProductQuery } from './product.schema';
export type { Product, ProductData, ProductPatch, ProductQuery };
export interface ProductParams extends KnexAdapterParams<ProductQuery> {
}
export declare class ProductService<ServiceParams extends Params = ProductParams> extends KnexService<Product, ProductData, ProductParams, ProductPatch> {
    create(data: any, params?: ServiceParams): Promise<any>;
    find(params?: ServiceParams): Promise<Paginated<Product>>;
    get(id: string, params?: ServiceParams): Promise<Product>;
    patch(id: string, data: ProductPatch, params?: ServiceParams): Promise<Product>;
    remove(id: string, params?: ServiceParams): Promise<Product>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
