// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Rating, RatingData, RatingPatch, RatingQuery, RatingService } from './rating.class'

export type { Rating, RatingData, RatingPatch, RatingQuery }

export type RatingClientService = Pick<RatingService<Params<RatingQuery>>, (typeof ratingMethods)[number]>

export const ratingPath = 'rating'

export const ratingMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const ratingClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(ratingPath, connection.service(ratingPath), {
    methods: ratingMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [ratingPath]: RatingClientService
  }
}
