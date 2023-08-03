// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import type { Application } from '../../declarations'
import { RatingService, getOptions } from './rating.class'
import { ratingPath, ratingMethods } from './rating.shared'
import hooks from './rating.hooks'

export * from './rating.class'
export * from './rating.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const rating = (app: Application) => {
  // Register our service on the Feathers application
  app.use(ratingPath, new RatingService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ratingMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(ratingPath).hooks(hooks)
}


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [ratingPath]: RatingService
  }
}
