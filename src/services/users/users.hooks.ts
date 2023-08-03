import { authenticate } from '@feathersjs/authentication'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { getUserSchema, joiOptions, joiReadOptions, userSchema } from './users.joi'
import validate from 'feathers-validate-joi'
import { HooksObject } from '@feathersjs/feathers'
import { userDataResolver, userResolver, userExternalResolver, userPatchResolver } from './users.schema'
import { disallow } from 'feathers-hooks-common'
import { setRoleBasedOnAdminEmail } from '../../hooks/setRoleBasedOnAdminEmail'



export default {
  around: {
    all: [schemaHooks.resolveExternal(userExternalResolver), schemaHooks.resolveResult(userResolver)],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },
  before: {
    all: [],
    find: [validate.form(getUserSchema, joiReadOptions)],
    get: [validate.form(getUserSchema, joiReadOptions)],
    create: [validate.form(userSchema, joiOptions), setRoleBasedOnAdminEmail],
    patch: [validate.form(userSchema, joiOptions)],
    remove: [disallow('external')]
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject
