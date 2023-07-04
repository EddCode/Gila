import Fastify from 'fastify'

import { routes } from '../Notification/infraestructure/httpHandlers'
import config from './config'
import { connectDB } from './db/connection'

const fastify = Fastify({
  logger: config.server.logger
})

fastify.register(routes, { prefix: '/api/v1/logs' })

const start = async (): Promise<void> => {
  try {
    const { port, host } = config.server
    await connectDB()
    await fastify.listen({ port, host })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

export default start
