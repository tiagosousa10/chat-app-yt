import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'


import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
const PORT = 5000 ; //nao estou a usar o env , pois estava com conflitos de portas.

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`server running on port ${PORT}`)
})

