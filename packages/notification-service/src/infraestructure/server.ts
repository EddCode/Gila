import Fastify from 'fastify'

import config from './config'

const fastify = Fastify({
  logger: config.server.logger
})

const start = async (): Promise<void> => {
  try {
    const { port, host } = config.server
    await fastify.listen({ port, host })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

export default start
