import Notification from '../../../infraestructure/db/collections/notifications'

export class MongoRepository {
  async save (notification: any): Promise<void> {
    try {
      const data = new Notification(notification)
      await data.save()
    } catch (error: any) {
      throw new Error(error)
    }
  }
}
