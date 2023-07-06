import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify'

import { User } from '../repositories'
import { NotificationProccesor } from '../../application'
import { EmailNotificator, SMSNotificator, PushNotificator } from '../gateways'
import { MongoRepository } from '../repositories/notifications'
import { opts, createSchema } from './schemas'

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
async function routes (fastify: FastifyInstance) {
  fastify.get('/', opts, async (_request: FastifyRequest, reply: FastifyReply) => {
    const data = await NotificationProccesor.getAllNotifications(new MongoRepository())
    reply.send({ message: 'success', logs: data })
  })

  fastify.post('/', createSchema, async (request: FastifyRequest, reply: FastifyReply) => {
    const { type, message } = request.body as { type: string, message: string }
    const notifications = new NotificationProccesor(
      new User(),
      new EmailNotificator(),
      new SMSNotificator(),
      new PushNotificator()
    )

    await notifications.processNotification(type, message)

    reply.send({ message: 'Notification sent' })
  })
}

export { routes }
