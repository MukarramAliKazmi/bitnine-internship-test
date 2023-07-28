import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import signupRouter from './routes/signup-route.js'
import loginRouter from './routes/login-route.js'
import logoutRouter from './routes/logout-route.js'
import refreshRouter from './routes/refresh-route.js'
import privateUserDataRouter from './routes/privateuserdata-route.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8080

const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg =
        'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
}

const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080']

app.use(cors(corsOptions))
app.use(json())
app.use(cookieParser())

app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/refresh', refreshRouter)
app.use('/privateuserdata', privateUserDataRouter)

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
