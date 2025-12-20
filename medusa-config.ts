import { defineConfig } from '@medusajs/framework/utils'

module.exports = defineConfig({
  projectConfig: {
    // Критически важно: должно быть database_url (с подчёркиванием), а не databaseUrl
    database_url: process.env.DATABASE_URL,
    
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    }
  },
  
  // Добавьте для отладки
  logging: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
  }
})