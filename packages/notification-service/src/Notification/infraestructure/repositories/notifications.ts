import NotificationRepository from '../../../infraestructure/db/collections/notifications'
import { type Notification } from '../../domain'

export class MongoRepository {
  async save (notification: any): Promise<void> {
    try {
      const data = new NotificationRepository(notification)
      await data.save()
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getAllNotifications (): Promise<Notification[]> {
    try {
      const data = await NotificationRepository.find()
      return data.map(notification => ({
        category: notification.category,
        message: notification.message,
        messageType: '',
        user: {
          name: notification.user?.name as string,
          email: notification.user?.email as string,
          phone: notification.user?.phone as string
        }
      }))
    } catch (error: any) {
      throw new Error(error)
    }
  }
}
