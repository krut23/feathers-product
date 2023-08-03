import type { Application } from '../../declarations';
import { CategoryService } from './category.class';
import { categoryPath } from './category.shared';
export * from './category.class';
export * from './category.schema';
export declare const category: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [categoryPath]: CategoryService;
    }
}
