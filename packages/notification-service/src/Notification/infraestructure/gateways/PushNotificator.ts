import { type PushNotificationService } from '../../../shared/repositories/NotificationService'

export class PushNotificator implements PushNotificationService {
  public async sendPushNotification (message: string, deviceToken: string): Promise<boolean> {
    return await Promise.resolve(true)
  }
}
