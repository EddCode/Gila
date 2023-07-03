export interface NotificationRepository {
  send: (notification: Notification) => Promise<Notification>
}

export interface Notification {
  reciver: string
  category: string
  message: string
}

export interface NotificationStrategy {
  sendNotification: (notification: Notification) => Promise<Notification>
}
