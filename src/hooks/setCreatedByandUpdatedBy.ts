import { Forbidden } from '@feathersjs/errors'
import { HookContext } from '@feathersjs/feathers'

export const setCreatedByAndUpdatedBy = () => (context: HookContext) => {
  const { user } = context.params

  if (user) {
    if (context.method === 'create') {
      context.data.createdBy = user.id
      context.data.updatedBy = user.id
    } else if (context.method === 'update' || context.method === 'patch') {
      context.data.updatedBy = user.id
    }
  }
}



