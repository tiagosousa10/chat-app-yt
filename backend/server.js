import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'

const app = express()

dotenv.config()
const PORT = 5000 ;

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/auth', authRoutes)


app.listen(PORT, () => console.log(`server running on port ${PORT}`))
