import { category } from './category/category'

import { product } from './product/product'
import { rating } from './rating/rating'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(category)
  app.configure(product)
  app.configure(rating)
  app.configure(user)
  // All services will be registered here
}
