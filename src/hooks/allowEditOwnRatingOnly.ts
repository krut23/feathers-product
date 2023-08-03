import { Forbidden } from '@feathersjs/errors'
import { HookContext } from '@feathersjs/feathers'

export const allowEditOwnRatingOnly = () => {
  return async (context: HookContext) => {
    const userId = context.params?.user?.id
    const { id } = context

    if (!userId) {
      throw new Forbidden('You must be logged in to update your rating.')
    }

    // Fetch the existing rating
    const existingRating = await context.service._get(id)

    // Check if the user is the creator of the rating
    if (existingRating.userId !== userId) {
      throw new Forbidden('You can only edit your own rating.')
    }
  }
}
