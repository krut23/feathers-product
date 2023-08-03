// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'
import { v4 as uuidv4 } from 'uuid'
import type { Application } from '../../declarations'
import type { User,UserData, UserPatch, UserQuery } from './users.schema'

export type { User, UserData, UserPatch, UserQuery }

export interface UserParams extends KnexAdapterParams<UserQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class UserService<ServiceParams extends Params = UserParams> extends KnexService<
  User,
  UserData,
  UserParams,
  UserPatch
> {

  
  async create(data: any, params?: ServiceParams): Promise<any> {
    const uuid = uuidv4()
    const userWithId = { ...data, id: uuid } 
    return super.create(userWithId, params)
  }

  async update(id: string, data: any, params?: ServiceParams): Promise<any> {
    return super.patch(id, data, params);
  }

  async remove(id: string, params?: ServiceParams): Promise<UserData> {
    return super.remove(id, params);
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'users'
  }
}


