import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { HooksObject } from '@feathersjs/feathers'
import { ratingResolver, ratingExternalResolver } from './rating.schema'
import {
  createratingSchema,
  getratingSchema,
  joiOptions,
  joiReadOptions,
  updateratingSchema
} from './rating.joi'
import { setCreatedByAndUpdatedBy } from '../../hooks/setCreatedByandUpdatedBy'
import { disallow } from 'feathers-hooks-common'
import { HookContext } from '../../declarations'


export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(ratingExternalResolver),
      schemaHooks.resolveResult(ratingResolver)
    ]
  },
  before: {
    all: [authenticate('jwt'), setCreatedByAndUpdatedBy()],
    find: [validate.form(getratingSchema, joiReadOptions)],
    get: [validate.form(getratingSchema, joiReadOptions)],
    create: [validate.form(createratingSchema, joiOptions)],
    patch: [validate.form(updateratingSchema, joiOptions)],
    remove: [disallow('external')]
  },
  after: {
    all: []
  },

  error: {
    all: []
  }
} as HooksObject
