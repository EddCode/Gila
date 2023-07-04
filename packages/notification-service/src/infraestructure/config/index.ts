import 'dotenv/config'

const config = {
  server: {
    port: 8080,
    host: '0.0.0.0',
    logger: process.env.NODE_ENV !== 'production'
  },
  db: {
    url: process.env.MONGO_DB ?? 'localhost:27017',
    name: process.env.MONGO_DB_NAME ?? 'notification-challenge',
    username: process.env.MONGO_USERNAME ?? 'root',
    password: process.env.MONGO_PASSWORD ?? '123456'
  }
}

export default config
