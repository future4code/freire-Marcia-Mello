import { Router } from "express"
import { OrderBusiness } from "../business/OrderBusiness"
import { OrderController } from "../controller/OrderController"
import { OrderDatabase } from "../database/OrderDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const orderRouter = Router()

const orderController = new OrderController(
    new OrderBusiness(
        new OrderDatabase(),
        new IdGenerator()
    )
)

orderRouter.post("/", orderController.createOrder)
orderRouter.get("/", orderController.getOrders)