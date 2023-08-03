// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const categorySchema = {
  $id: 'Category',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'name'],
  properties: {
    id: { type: 'string' },

    name: { type: 'string' }
  }
} as const
export type Category = FromSchema<typeof categorySchema>
export const categoryValidator = getValidator(categorySchema, dataValidator)
export const categoryResolver = resolve<Category, HookContext>({})

export const categoryExternalResolver = resolve<Category, HookContext>({})

// Schema for creating new data
export const categoryDataSchema = {
  $id: 'CategoryData',
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    ...categorySchema.properties
  }
} as const
export type CategoryData = FromSchema<typeof categoryDataSchema>
export const categoryDataValidator = getValidator(categoryDataSchema, dataValidator)
export const categoryDataResolver = resolve<CategoryData, HookContext>({})

// Schema for updating existing data
export const categoryPatchSchema = {
  $id: 'CategoryPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...categorySchema.properties
  }
} as const
export type CategoryPatch = FromSchema<typeof categoryPatchSchema>
export const categoryPatchValidator = getValidator(categoryPatchSchema, dataValidator)
export const categoryPatchResolver = resolve<CategoryPatch, HookContext>({})

// Schema for allowed query properties
export const categoryQuerySchema = {
  $id: 'CategoryQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(categorySchema.properties)
  }
} as const
export type CategoryQuery = FromSchema<typeof categoryQuerySchema>
export const categoryQueryValidator = getValidator(categoryQuerySchema, queryValidator)
export const categoryQueryResolver = resolve<CategoryQuery, HookContext>({})
