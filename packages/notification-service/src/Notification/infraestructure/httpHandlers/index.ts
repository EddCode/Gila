import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify'

import { opts, createSchema } from './schemas'

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
async function routes (fastify: FastifyInstance) {
  fastify.get('/', opts, async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = [
      { type: 'info', message: 'hello', createdAt: new Date() },
      { type: 'info', message: 'hello', createdAt: new Date() }
    ]
    reply.send({ message: 'success', data })
  })

  fastify.post('/', createSchema, async (_request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: 'success' })
  })
}

export { routes }
