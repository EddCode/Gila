import 'dotenv/config'

const config = {
  server: {
    port: 3000,
    host: '0.0.0.0',
    logger: process.env.NODE_ENV !== 'production'
  }
}

export default config
