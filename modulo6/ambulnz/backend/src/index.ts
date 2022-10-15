import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

import { pingRouter } from './router/pingRouter'
import { pizzaRouter } from './router/pizzaRouter'
import { orderRouter } from './router/orderRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/api/ping", pingRouter)
app.use("/api/pizzas", pizzaRouter)
app.use("/api/orders", orderRouter)