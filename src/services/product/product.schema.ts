// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const productSchema = {
  $id: 'Product',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'name', 'description', 'categoryId'],
  properties: {
    id: { type: 'string' },

    name: { type: 'string' },
    description: { type: 'string' },
    categoryId:{type:'string'}
  }
} as const
export type Product = FromSchema<typeof productSchema>
export const productValidator = getValidator(productSchema, dataValidator)
export const productResolver = resolve<Product, HookContext>({})

export const productExternalResolver = resolve<Product, HookContext>({})

// Schema for creating new data
export const productDataSchema = {
  $id: 'ProductData',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...productSchema.properties
  }
} as const
export type ProductData = FromSchema<typeof productDataSchema>
export const productDataValidator = getValidator(productDataSchema, dataValidator)
export const productDataResolver = resolve<ProductData, HookContext>({})

// Schema for updating existing data
export const productPatchSchema = {
  $id: 'ProductPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...productSchema.properties
  }
} as const
export type ProductPatch = FromSchema<typeof productPatchSchema>
export const productPatchValidator = getValidator(productPatchSchema, dataValidator)
export const productPatchResolver = resolve<ProductPatch, HookContext>({})

// Schema for allowed query properties
export const productQuerySchema = {
  $id: 'ProductQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(productSchema.properties)
  }
} as const
export type ProductQuery = FromSchema<typeof productQuerySchema>
export const productQueryValidator = getValidator(productQuerySchema, queryValidator)
export const productQueryResolver = resolve<ProductQuery, HookContext>({})
