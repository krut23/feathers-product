import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { HooksObject } from '@feathersjs/feathers'
import {
  categoryResolver,
  categoryExternalResolver,
  categoryDataResolver,
  categoryPatchResolver
} from './category.schema'
import { categorySchema, getcategorySchema, joiOptions, joiReadOptions, updateCategorySchema } from './category.joi'
import { setCreatedByAndUpdatedBy } from '../../hooks/setCreatedByandUpdatedBy'
import { disallow } from 'feathers-hooks-common'

export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(categoryExternalResolver),
      schemaHooks.resolveResult(categoryResolver)
    ]
  },
  before: {
    all: [authenticate('jwt'), setCreatedByAndUpdatedBy()],
    find: [validate.form(getcategorySchema, joiReadOptions)],
    get: [validate.form(getcategorySchema, joiReadOptions)],
    create: [validate.form(categorySchema, joiOptions), schemaHooks.resolveData(categoryDataResolver)],
    patch: [
      validate.form(updateCategorySchema, joiOptions),
      schemaHooks.resolveData(categoryPatchResolver) 
    ],
    remove: [disallow('external')]
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject
