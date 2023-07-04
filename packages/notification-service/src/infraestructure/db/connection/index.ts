import mongoose, { type ConnectOptions } from 'mongoose'
import logger from '../../../shared/infra/logs'
import config from '../../config'

export async function connectDB (): Promise<void> {
  try {
    const {
      db: {
        username,
        password,
        name,
        url
      }
    } = config

    const mongoUri = `mongodb://${username}:${password}@${url}/${name}?authSource=admin`
    logger.info(`Connecting to ${mongoUri}`)
    const connectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    await mongoose.connect(mongoUri, connectOptions as ConnectOptions)
    logger.info('Connected to MongoDB')
  } catch (error) {
    logger.error(error)
  }
}
