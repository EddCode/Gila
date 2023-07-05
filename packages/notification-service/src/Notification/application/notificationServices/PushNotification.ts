import { type PushNotificationService } from '../../../shared/repositories/NotificationService'
import type { NotificationStrategy, Notification } from '../../domain'

export class PushService implements NotificationStrategy {
  private readonly notification: PushNotificationService

  constructor (notification: PushNotificationService) {
    this.notification = notification
  }

  async sendNotification (notification: Notification): Promise<Notification> {
    await this.notification.sendPushNotification(notification)
    return notification
  }
}
