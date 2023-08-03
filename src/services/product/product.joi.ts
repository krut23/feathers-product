import Joi from 'joi'
import validate from 'feathers-validate-joi'
import { HookContext } from '@feathersjs/feathers'

const name = Joi.string().required()
const description = Joi.string().required()
const categoryId = Joi.string().uuid().required() 
const createdBy = Joi.string().required()
const updatedBy = Joi.string().required()
const $select = Joi.string().strip()
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const createProductSchema = Joi.object().keys({
  name,
  description,
  createdBy,
  updatedBy,
  categoryId
})

export const updateProductSchema = Joi.object().keys({
  name,
  description,
  updatedBy,
  categoryId
})

export const getProductSchema = Joi.object().keys({
  limit,
  skip,
  $select
})


export const joiOptions = {
  errors: {
    wrap: {
      label: ''
    }
  },
  convert: true,
  abortEarly: false
}

export const joiReadOptions = {
  getContext(context: HookContext) {
    return context.params.query
  },
  setContext(context: HookContext, newValues: any) {
    Object.assign(context.params.query ?? {}, newValues)
  },
  errors: {
    wrap: {
      label: ''
    }
  },

  convert: true,
  abortEarly: false
}
