import 'dotenv/config'
import './db/connection.js'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRouter from './routes/auth.js'
import productRouter from './routes/product.js'
import userRouter from './routes/userRoute.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/auth/', authRouter)
app.use('/api/new/', productRouter)
app.use('/api/user/', userRouter)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})
