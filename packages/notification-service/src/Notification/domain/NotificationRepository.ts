export interface NotificationRepository {
  send: (notification: Notification) => Promise<Notification>
}

interface User {
  name: string
  email: string
  phone: string
}

export interface Notification {
  category: string
  message: string
  messageType: string
  user: User
}

export interface NotificationStrategy {
  sendNotification: (notification: Notification) => Promise<Notification>
}
