import { Router } from "express"
import { PizzaBusiness } from "../business/PizzaBusiness"
import { PizzaController } from "../controller/PizzaController"
import { PizzaDatabase } from "../database/PizzaDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const pizzaRouter = Router()

const pizzaController = new PizzaController(
    new PizzaBusiness(
        new PizzaDatabase(),
        new IdGenerator()
    )
)

pizzaRouter.get("/", pizzaController.getPizzas)
pizzaRouter.get("/v2", pizzaController.getPizzasV2)