import { type EmailNotificationService } from '../../../shared/repositories/NotificationService'
import type { NotificationStrategy, Notification } from '../../domain'

export class EmailService implements NotificationStrategy {
  private readonly notification: EmailNotificationService

  constructor (notification: EmailNotificationService) {
    this.notification = notification
  }

  async sendNotification (notification: Notification): Promise<Notification> {
    await this.notification.sendEmail(notification.category, notification.message)
    return notification
  }
}
