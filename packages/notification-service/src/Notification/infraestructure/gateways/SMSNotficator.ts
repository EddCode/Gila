import { type SMSNotificationService } from '../../../shared/repositories/NotificationService'
import { type Notification } from '../../domain'
import { MongoRepository } from '../repositories/notifications'

export class SMSNotificator implements SMSNotificationService {
  mongoRepository: MongoRepository

  constructor () {
    this.mongoRepository = new MongoRepository()
  }

  public async sendSMS (notification: Notification): Promise<boolean> {
    await this.mongoRepository.save(notification)
    return await Promise.resolve(true)
  }
}
