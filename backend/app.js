import express from 'express'
import morgan from 'morgan'
import { authRouter } from './routes/auth.js'
// import createPizzaDB from './seeder.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
// createPizzaDB()

export default app
