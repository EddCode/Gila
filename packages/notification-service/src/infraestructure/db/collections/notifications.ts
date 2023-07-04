import mongoose from 'mongoose'
import Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  }
}, { timestamps: true })

const NotificationSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  user: UserSchema
}, { timestamps: true })

export default mongoose.model('Notifications', NotificationSchema)
