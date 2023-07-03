import { type SMSNotificationService } from '../../../shared/repositories/NotificationService'
import type { NotificationStrategy, Notification } from '../../domain'

export class SMSService implements NotificationStrategy {
  private readonly notification: SMSNotificationService

  constructor (notification: SMSNotificationService) {
    this.notification = notification
  }

  async sendNotification (notification: Notification): Promise<Notification> {
    await this.notification.sendSMS(notification.message, notification.reciver)
    return { message: 'hello', reciver: 'world', category: 'sms' }
  }
}
