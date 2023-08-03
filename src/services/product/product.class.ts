import type { HookContext, Paginated, Params, Query } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'
import { v4 as uuidv4 } from 'uuid'
import type { Application } from '../../declarations'
import type { Product, ProductData, ProductPatch, ProductQuery } from './product.schema'
import Category from '../../models/category.model'
import { BadRequest, Conflict, NotFound } from '@feathersjs/errors'

export type { Product, ProductData, ProductPatch, ProductQuery }

export interface ProductParams extends KnexAdapterParams<ProductQuery> {}

export class ProductService<ServiceParams extends Params = ProductParams> extends KnexService<
  Product,
  ProductData,
  ProductParams,
  ProductPatch
> {
  async create(data: any, params?: ServiceParams): Promise<any> {
    const uuid = uuidv4()
    const productWithId = { ...data, id: uuid }

    // categoryId if not provided
    if (!productWithId.categoryId) {
      throw new BadRequest('categoryId is required.')
    }

    // Check if the provided categoryId exists in the Category model
    const category = await Category.findOne({
      where: {
        id: productWithId.categoryId
      }
    })

    if (!category) {
      throw new Conflict('Category with the provided categoryId not found.')
    }

    // Set the categoryId to the id of the Category model
    productWithId.categoryId = category.id

    return super.create(productWithId, params)
  }

  async find(params?: ServiceParams): Promise<Paginated<Product>> {
    return super.find(params)
  }

  async get(id: string, params?: ServiceParams): Promise<Product> {
    const product = await super.get(id, params)

    if (!product) {
      throw new NotFound('Product not found.')
    }

    return product
  }

  async patch(id: string, data: ProductPatch, params?: ServiceParams): Promise<Product> {
    // categoryId if provided
    if (data.categoryId) {
      // Check if the provided categoryId exists in the Category model
      const category = await Category.findOne({
        where: {
          id: data.categoryId
        }
      })

      if (!category) {
        throw new Conflict('Category with the provided categoryId not found.')
      }

      // Set the categoryId to the id of the Category model
      data.categoryId = category.id
    }

    return super.patch(id, data, params)
  }

  async remove(id: string, params?: ServiceParams): Promise<Product> {
    return super.remove(id, params)
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'product'
  }
}
