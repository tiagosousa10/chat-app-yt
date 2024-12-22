import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
const PORT = 5000 ; //nao estou a usar o env , pois estava com conflitos de portas.

dotenv.config()

/* app.get('/', (req, res) => {
  res.send('hello world')
}) */

app.use(express.json())

app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`server running on port ${PORT}`)
})

