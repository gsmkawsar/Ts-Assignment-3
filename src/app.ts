import express, { Request, Response } from 'express'
const app = express()
// middleware
app.use(express.json())


// app.use('/api/products', productRouter)
// app.use('/api/orders', orderRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Running ',
  })
})

export default app