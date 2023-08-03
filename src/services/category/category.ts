// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import type { Application } from '../../declarations'
import { CategoryService, getOptions } from './category.class'
import { categoryPath, categoryMethods } from './category.shared'
import hooks from './category.hooks'

export * from './category.class'
export * from './category.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const category = (app: Application) => {
  // Register our service on the Feathers application
  app.use(categoryPath, new CategoryService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: categoryMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(categoryPath).hooks(hooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [categoryPath]: CategoryService
  }
}
