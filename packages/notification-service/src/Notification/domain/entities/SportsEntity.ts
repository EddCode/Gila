import { type NotificationRepository, type Notification, type NotificationStrategy } from '../NotificationRepository'

export class SportsEntity implements NotificationRepository {
  private readonly notificaitonStrategy: NotificationStrategy

  constructor (readonly notificationStrategy: NotificationStrategy) {
    this.notificaitonStrategy = notificationStrategy
  }

  public async send (notification: Notification): Promise<Notification> {
    return await this.notificaitonStrategy.sendNotification(notification)
  }
}
