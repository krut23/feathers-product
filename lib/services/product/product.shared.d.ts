import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Product, ProductData, ProductPatch, ProductQuery, ProductService } from './product.class';
export type { Product, ProductData, ProductPatch, ProductQuery };
export type ProductClientService = Pick<ProductService<Params<ProductQuery>>, (typeof productMethods)[number]>;
export declare const productPath = "product";
export declare const productMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const productClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [productPath]: ProductClientService;
    }
}
