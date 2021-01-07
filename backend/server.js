import http from 'http'
import mongoose from 'mongoose'
import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3001
const DB_KEY = process.env.DB_KEY
const server = http.createServer(app)

server.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`port ${PORT}`)
  mongoose.connect(DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
})

export default server



