import { type Notification } from '../../Notification/domain'

export interface SMSNotificationService {
  sendSMS: (notification: Notification) => Promise<boolean>
}

export interface EmailNotificationService {
  sendEmail: (notification: Notification) => Promise<boolean>
}

export interface PushNotificationService {
  sendPushNotification: (notification: Notification) => Promise<boolean>
}
