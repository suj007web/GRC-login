import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  },
  {
    collection: 'users'
  }
)

const User = mongoose.model('User', userSchema)

export default User
