import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Rating, RatingData, RatingPatch, RatingQuery, RatingService } from './rating.class';
export type { Rating, RatingData, RatingPatch, RatingQuery };
export type RatingClientService = Pick<RatingService<Params<RatingQuery>>, (typeof ratingMethods)[number]>;
export declare const ratingPath = "rating";
export declare const ratingMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const ratingClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [ratingPath]: RatingClientService;
    }
}
