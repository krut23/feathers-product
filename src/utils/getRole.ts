import dotenv from 'dotenv'

dotenv.config({ path: '../../config.env' })

function getRole(email: string): string {
  const adminEmail = process.env.ADMIN_EMAIL

  if (adminEmail && new RegExp(adminEmail).test(email)) {
    return 'admin'
  } else {
    return 'customer'
  }
}
