import { type EmailNotificationService } from '../../../shared/repositories/NotificationService'
import { type Notification } from '../../domain'
import { MongoRepository } from '../repositories/notifications'

export class EmailNotificator implements EmailNotificationService {
  mongoRepository: MongoRepository

  constructor () {
    this.mongoRepository = new MongoRepository()
  }

  public async sendEmail (notification: Notification): Promise<boolean> {
    await this.mongoRepository.save(notification)
    return await Promise.resolve(true)
  }
}
