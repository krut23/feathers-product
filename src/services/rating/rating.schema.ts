// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'
import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { ratingValidation } from './rating.joi'

// Main data model schema
export const ratingSchema = {
  $id: 'Rating',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'userId','productId','rating'],
  properties: {
    id: { type: 'string' },
rating:{type:'number'},
    userId: { type: 'string' },
    productId:{type:'string'}
  }
} as const
export type Rating = FromSchema<typeof ratingSchema>
export const ratingValidator = getValidator(ratingSchema, dataValidator)
export const ratingResolver = resolve<Rating, HookContext>({})

export const ratingExternalResolver = resolve<Rating, HookContext>({})

// Schema for creating new data
export const ratingDataSchema = {
  $id: 'RatingData',
  type: 'object',
  additionalProperties: false,
  required: ['rating'],
  properties: {
    ...ratingSchema.properties
  }
} as const
export type RatingData = FromSchema<typeof ratingDataSchema>
export const ratingDataValidator = getValidator(ratingDataSchema, dataValidator)
export const ratingDataResolver = resolve<RatingData, HookContext>({})

// Schema for updating existing data
export const ratingPatchSchema = {
  $id: 'RatingPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...ratingSchema.properties,
     
  }
} as const
export type RatingPatch = FromSchema<typeof ratingPatchSchema>
export const ratingPatchValidator = getValidator(ratingPatchSchema, dataValidator)
export const ratingPatchResolver = resolve<RatingPatch, HookContext>({})

// Schema for allowed query properties
export const ratingQuerySchema = {
  $id: 'RatingQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(ratingSchema.properties)
  }
} as const
export type RatingQuery = FromSchema<typeof ratingQuerySchema>
export const ratingQueryValidator = getValidator(ratingQuerySchema, queryValidator)
export const ratingQueryResolver = resolve<RatingQuery, HookContext>({})
