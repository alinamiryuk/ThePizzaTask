import express from 'express'
import Pizza from '../models/Pizza.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
      const pizzas = await Pizza.find()
      res.status(200).json(pizzas)
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' })
    }
  })

export { router as pizzasRouter }
