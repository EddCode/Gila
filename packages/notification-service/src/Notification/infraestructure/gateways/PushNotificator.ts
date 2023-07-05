import { type PushNotificationService } from '../../../shared/repositories/NotificationService'
import { type Notification } from '../../domain'
import { MongoRepository } from '../repositories/notifications'

export class PushNotificator implements PushNotificationService {
  mongoRepository: MongoRepository

  constructor () {
    this.mongoRepository = new MongoRepository()
  }

  public async sendPushNotification (notification: Notification): Promise<boolean> {
    await this.mongoRepository.save(notification)
    return await Promise.resolve(true)
  }
}
