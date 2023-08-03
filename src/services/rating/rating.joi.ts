import Joi from 'joi'
import validate from 'feathers-validate-joi'
import { HookContext } from '@feathersjs/feathers'

const userId = Joi.string().uuid().required()
const productId = Joi.string().uuid().required()
const rating = Joi.number().min(0).max(5).required()
const createdBy = Joi.string().required()
const updatedBy = Joi.string().required()
const $select = Joi.string().strip()
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const ratingSchema = Joi.object().keys({
  userId,
  productId,
  rating,
  createdBy,
  updatedBy
})

export const createratingSchema = Joi.object().keys({
  productId,
  rating,
  createdBy,
  updatedBy
})

export const updateratingSchema = Joi.object().keys({
  productId,
  rating,
  updatedBy
})
export const getratingSchema = Joi.object().keys({
  limit,
  skip,
  $select
})

export const ratingValidation = validate.form(ratingSchema)

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
