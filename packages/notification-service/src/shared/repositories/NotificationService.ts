export interface SMSNotificationService {
  sendSMS: (message: string, phoneNumber: string) => Promise<boolean>
}

export interface EmailNotificationService {
  sendEmail: (message: string, email: string) => Promise<boolean>
}

export interface PushNotificationService {
  sendPushNotification: (message: string, deviceToken: string) => Promise<boolean>
}
