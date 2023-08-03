import type { HookContext, Paginated, Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Rating, RatingData, RatingPatch, RatingQuery } from './rating.schema'
import { BadRequest, Conflict, Forbidden, NotFound } from '@feathersjs/errors'
import { v4 as uuidv4 } from 'uuid'
export type { Rating, RatingData, RatingPatch, RatingQuery }

export interface RatingParams extends KnexAdapterParams<RatingQuery> {}

export interface ServiceParams extends Params {}

export class RatingService<ServiceParams extends Params = RatingParams> extends KnexService<
  Rating,
  RatingData,
  RatingParams,
  RatingPatch
> {
  async create(data: any, params?: Params): Promise<any> {
    const { productId, rating } = data
    const userId = params?.user?.id

    if (!userId) {
      throw new BadRequest('You must be logged in to submit a rating.')
    }

    // Check if the user has already rated the product
    const existingRating = await this._find({
      query: {
        productId,
        userId
      }
    })

    if (existingRating.total > 0) {
      throw new Conflict('You have already rated this product.')
    }

    const uuid = uuidv4()
    const ratingWithId = { ...data, id: uuid, userId, productId, rating }

    return super.create(ratingWithId, params)
  }

  async find(params?: ServiceParams): Promise<Paginated<Rating>> {
    return super.find(params)
  }

  async get(id: string, params?: ServiceParams): Promise<Rating> {
    const rating = await super.get(id, params)

    if (!rating) {
      throw new NotFound('Rating not found.')
    }

    return rating
  }

  async patch(id: string, data: any, params?: Params): Promise<any> {
    const { productId, rating } = data
    const userId = params?.user?.id

    if (!userId) {
      throw new BadRequest('You must be logged in to update a rating.')
    }

    // Check if the rating exists
    const existingRating = await this._get(id)

    if (!existingRating) {
      throw new BadRequest('Rating not found.')
    }

    // Check if the user owns the rating and can update it
    if (existingRating.userId !== userId) {
      throw new BadRequest('You are not authorized to update this rating.')
    }

    const updatedRating = { ...existingRating, productId, rating }

    return super.patch(id, updatedRating, params)
  }

  async remove(id: string, params?: Params): Promise<any> {
    const userId = params?.user?.id

    if (!userId) {
      throw new BadRequest('You must be logged in to delete a rating.')
    }

    // Check if the rating exists
    const existingRating = await this._get(id)

    if (!existingRating) {
      throw new BadRequest('Rating not found.')
    }

    // Check if the user owns the rating and can delete it
    if (existingRating.userId !== userId) {
      throw new BadRequest('You are not authorized to delete this rating.')
    }

    return super.remove(id, params)
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'rating'
  }
}
