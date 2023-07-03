import { type EmailNotificationService } from '../../../shared/repositories/NotificationService'

export class EmailNotificator implements EmailNotificationService {
  public async sendEmail (message: string, email: string): Promise<boolean> {
    return await Promise.resolve(true)
  }
}
