import { FinanceEntity, SportsEntity, MovieEntity, type NotificationStrategy } from '../domain'
import type { NotificationType } from './notificationTypes'

export class NotificationFactory {
  private readonly notificationTypes: NotificationType
  private readonly factory = {
    finance: (strategy: NotificationStrategy) => new FinanceEntity(strategy),
    sports: (strategy: NotificationStrategy) => new SportsEntity(strategy),
    movies: (strategy: NotificationStrategy) => new MovieEntity(strategy)
  }

  constructor (type: NotificationType) {
    this.notificationTypes = type
  }

  public getNotification (notificaitonStrategy: NotificationStrategy): FinanceEntity | SportsEntity | MovieEntity {
    const instance = this.factory[this.notificationTypes](notificaitonStrategy)
    return instance
  }
}
