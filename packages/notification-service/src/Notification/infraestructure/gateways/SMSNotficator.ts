import { type SMSNotificationService } from '../../../shared/repositories/NotificationService'

export class SMSNotificator implements SMSNotificationService {
  public async sendSMS (_message: string, _phoneNumber: string): Promise<boolean> {
    return await Promise.resolve(true)
  }
}
