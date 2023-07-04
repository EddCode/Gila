import { type PushNotificationService } from '../../../shared/repositories/NotificationService'

export class PushNotificator implements PushNotificationService {
  public async sendPushNotification (_message: string, _deviceToken: string): Promise<boolean> {
    return await Promise.resolve(true)
  }
}
