import express from 'express'
import morgan from 'morgan'
import { authRouter } from './routes/auth.js'
import { pizzasRouter } from './routes/pizzas.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
app.use('/api/pizzas', pizzasRouter)

export default app
