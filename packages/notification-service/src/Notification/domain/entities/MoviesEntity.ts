import { type NotificationRepository, type Notification, type NotificationStrategy } from '../NotificationRepository'

export class MovieEntity implements NotificationRepository {
  private readonly notificationStrategy: NotificationStrategy

  constructor (notificationStrategy: NotificationStrategy) {
    this.notificationStrategy = notificationStrategy
  }

  public async send (notification: Notification): Promise<Notification> {
    return await this.notificationStrategy.sendNotification(notification)
  }
}
