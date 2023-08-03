import Joi from 'joi'
import validate from 'feathers-validate-joi'
import { HookContext } from '@feathersjs/feathers'

const name = Joi.string().required()
const createdBy = Joi.string().required()
const updatedBy = Joi.string().required()
const $select = Joi.string().strip()
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const categorySchema = Joi.object().keys({
  name,
  createdBy,
  updatedBy
})

export const updateCategorySchema = Joi.object().keys({
  name,
  updatedBy
})
export const getcategorySchema = Joi.object().keys({
  limit,
  skip,
  $select
})

export const ratingValidation = validate.form(categorySchema)

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