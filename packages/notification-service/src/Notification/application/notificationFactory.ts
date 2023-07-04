import { type EmailNotificationService, type PushNotificationService, type SMSNotificationService } from '../../shared/repositories/NotificationService'
import { FinanceEntity, SportsEntity, MovieEntity, type NotificationStrategy, type NotificationRepository } from '../domain'
import { EmailService } from './notificationServices/EmailNotification'
import { PushService } from './notificationServices/PushNotification'
import { SMSService } from './notificationServices/SMSNotification'

import type { NotificationType } from './notificationTypes'

export class NotificationFactory {
  private readonly notificationChannel: {
    Email: NotificationStrategy | undefined
    SMS: NotificationStrategy | undefined
    'Push Notification': NotificationStrategy | undefined
  } = { Email: undefined, SMS: undefined, 'Push Notification': undefined }

  private readonly category = {
    finance: (strategy: NotificationStrategy) => new FinanceEntity(strategy),
    sports: (strategy: NotificationStrategy) => new SportsEntity(strategy),
    movies: (strategy: NotificationStrategy) => new MovieEntity(strategy)
  }

  withEmail (emailService: EmailNotificationService): NotificationFactory {
    this.notificationChannel.Email = new EmailService(emailService)
    return this
  }

  withSMS (SMS: SMSNotificationService): NotificationFactory {
    this.notificationChannel.SMS = new SMSService(SMS)
    return this
  }

  withPushNotification (pushService: PushNotificationService): NotificationFactory {
    this.notificationChannel['Push Notification'] = new PushService(pushService)
    return this
  }

  build (): NotificationFactory {
    return this
  }

  public getNotification (channel: string, category: NotificationType): NotificationRepository {
    const notificator = this.notificationChannel[channel as keyof typeof this.notificationChannel]
    return this.category[category.toLocaleLowerCase() as keyof typeof this.category](notificator as NotificationStrategy)
  }
}
