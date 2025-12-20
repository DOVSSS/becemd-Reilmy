import { defineConfig } from '@medusajs/framework/utils'

module.exports = defineConfig({
  projectConfig: {
    
    databaseUrl: process.env.DATABASE_URL as string,
    
    http: {
      storeCors: process.env.STORE_CORS as string,
      adminCors: process.env.ADMIN_CORS as string,
      authCors: process.env.AUTH_CORS as string,
      jwtSecret: process.env.JWT_SECRET as string,
      cookieSecret: process.env.COOKIE_SECRET as string,
    }
  }
})