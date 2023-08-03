import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { HooksObject } from '@feathersjs/feathers'
import {
  productResolver,
  productExternalResolver,
  productDataResolver,
  productPatchResolver
} from './product.schema'

import { createProductSchema, getProductSchema, joiOptions, joiReadOptions, updateProductSchema } from './product.joi'
import { adminOnly } from '../../hooks/checkAdminUser'
import {setCreatedByAndUpdatedBy} from '../../hooks/setCreatedByandUpdatedBy'
import { allowEditOwnRatingOnly } from '../../hooks/allowEditOwnRatingOnly'
import { disallow } from 'feathers-hooks-common'


export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(productExternalResolver),
      schemaHooks.resolveResult(productResolver)
    ]
  },
  before: {
    all: [authenticate('jwt'), setCreatedByAndUpdatedBy(), adminOnly],
    find: [validate.form(getProductSchema, joiReadOptions)],
    get: [validate.form(getProductSchema, joiReadOptions)],
    create: [validate.form(createProductSchema, joiOptions), schemaHooks.resolveData(productDataResolver)],
    patch: [validate.form(updateProductSchema, joiOptions), schemaHooks.resolveData(productPatchResolver)],
    remove: [disallow('external')]
  },
  after: {
    all: [],
    create: [],
    update: []
  },
  error: {
    all: []
  }
} as HooksObject
