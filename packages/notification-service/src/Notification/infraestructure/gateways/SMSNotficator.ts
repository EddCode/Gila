import { type SMSNotificationService } from '../../../shared/repositories/NotificationService'

export class SMSNotificator implements SMSNotificationService {
  public async sendSMS (message: string, phoneNumber: string): Promise<boolean> {
    return await Promise.resolve(true)
  }
}
