import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import lifecycle from './middleware/middleware.js'

import authRouter from '../routes/auth.js'
import productRouter from '../routes/product.js'
import userRouter from '../routes/userRoute.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(lifecycle({
  async setup() {
    // This runs before all your handlers
    // Put your database connection here. e.g.
    // mongoose.set('strictQuery', false)
    // await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    // This runs after all your handlers
    // Put your database disconnection here. e.g.
    // await mongoose.disconnect()
  }
}))

app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/auth/', authRouter)
app.use('/api/product/', productRouter)
app.use('/api/user/', userRouter)

// app.listen(PORT, () => {
//   console.log(`Server started at http://localhost:${PORT}`);
// })

export default app