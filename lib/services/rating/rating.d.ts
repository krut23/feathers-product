import type { Application } from '../../declarations';
import { RatingService } from './rating.class';
import { ratingPath } from './rating.shared';
export * from './rating.class';
export * from './rating.schema';
export declare const rating: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [ratingPath]: RatingService;
    }
}
