// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import type { Application } from '../../declarations'
import { ProductService, getOptions } from './product.class'
import { productPath, productMethods } from './product.shared'
import hooks from './product.hooks'

export * from './product.class'
export * from './product.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const product = (app: Application) => {
  // Register our service on the Feathers application
  app.use(productPath, new ProductService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: productMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(productPath).hooks(hooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [productPath]: ProductService
  }
}
