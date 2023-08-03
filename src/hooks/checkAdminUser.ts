import { Forbidden } from '@feathersjs/errors'
import { HookContext } from '@feathersjs/feathers'

export const adminOnly = (context: HookContext): void => {
  const { user } = context.params
  if (!user || user.role !== 'admin') {
    throw new Forbidden('Only admin users are authorized to create and manage products.')
  }
}
