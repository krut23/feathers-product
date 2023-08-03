import { HookContext } from '@feathersjs/feathers'
import dotenv from 'dotenv'

dotenv.config({ path: '../../config.env' })

export async function setRoleBasedOnAdminEmail(context: HookContext) {
  const { app, data } = context
  const adminEmailPattern = process.env.ADMIN_EMAIL ? new RegExp(process.env.ADMIN_EMAIL) : undefined

  if (adminEmailPattern && adminEmailPattern.test(data.email)) {
    // If user's email matches the admin email pattern, set role as "admin"
    context.data.role = 'admin'
  } else {
    // Otherwise, set role as "customer"
    context.data.role = 'customer'
  }

  return context
}
