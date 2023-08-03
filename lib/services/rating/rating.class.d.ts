import type { Paginated, Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Rating, RatingData, RatingPatch, RatingQuery } from './rating.schema';
export type { Rating, RatingData, RatingPatch, RatingQuery };
export interface RatingParams extends KnexAdapterParams<RatingQuery> {
}
export interface ServiceParams extends Params {
}
export declare class RatingService<ServiceParams extends Params = RatingParams> extends KnexService<Rating, RatingData, RatingParams, RatingPatch> {
    create(data: any, params?: Params): Promise<any>;
    find(params?: ServiceParams): Promise<Paginated<Rating>>;
    get(id: string, params?: ServiceParams): Promise<Rating>;
    patch(id: string, data: any, params?: Params): Promise<any>;
    remove(id: string, params?: Params): Promise<any>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
