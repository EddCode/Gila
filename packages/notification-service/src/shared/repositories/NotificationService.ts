import { type Notification } from '../../Notification/domain'

export interface SMSNotificationService {
  sendSMS: (message: string, phoneNumber: string) => Promise<boolean>
}

export interface EmailNotificationService {
  sendEmail: (notification: Notification) => Promise<boolean>
}

export interface PushNotificationService {
  sendPushNotification: (message: string, deviceToken: string) => Promise<boolean>
}
