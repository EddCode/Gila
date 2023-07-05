import { type EmailNotificationService, type PushNotificationService, type SMSNotificationService } from '../../shared/repositories/NotificationService'
import { type Notification } from '../domain'
import { NotificationFactory } from './notificationFactory'
import { type NotificationType } from './notificationTypes'

interface UserModel {
  id: string
  name: string
  email: string
  phone: string
  categories: string[]
  channels: string[]
}

export class NotificationProccesor {
  private readonly userRepository: any
  private readonly EmailService: EmailNotificationService
  private readonly SMS: SMSNotificationService
  private readonly PushService: PushNotificationService

  constructor (
    userRepository: any,
    emailService: EmailNotificationService,
    smsService: SMSNotificationService,
    pushService: PushNotificationService) {
    this.userRepository = userRepository
    this.EmailService = emailService
    this.SMS = smsService
    this.PushService = pushService
  }

  static async getAllNotifications (notificationRepository: any): Promise<Notification> {
    const notifications = await notificationRepository.getAllNotifications()
    return notifications
  }

  async processNotification (type: string, message: string): Promise<void> {
    const users = await this.userRepository.userByCategory(type)
    this.notificationType(users, type as NotificationType, message)
    await Promise.resolve()
  }

  private async notificationType (users: UserModel[], category: NotificationType, message: string): Promise<void> {
    const promises = users.map(async user => {
      user.channels.map(async channel => {
        const factory = new NotificationFactory()
          .withEmail(this.EmailService)
          .withSMS(this.SMS)
          .withPushNotification(this.PushService)
          .build()

        const notification = factory.getNotification(channel, category)
        return await notification.send({ message, category, user, messageType: channel })
      })
    })

    await Promise.all(promises)
  }
}
