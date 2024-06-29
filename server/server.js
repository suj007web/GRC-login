import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoute.js'

dotenv.config({
  path: './.env'
})

const server = express()
const PORT = process.env.PORT || 8000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(bodyParser.json());

server.use('/api/user', userRouter)

server.get('/', (req, res) => {
  res.send('Serving Running!')
})

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {})
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

connectDB()

if (connectDB) {
  server.listen(PORT, () => {
    console.log('server running on port http://localhost:' + PORT)
  })
}
