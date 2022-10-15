import { PizzaDatabase } from "../database/PizzaDatabase"
import { IGetPizzasOutputDTO, Pizza } from "../models/Pizza"
import { IdGenerator } from "../services/IdGenerator"

export class PizzaBusiness {
    constructor(
        private pizzaDatabase: PizzaDatabase,
        private idGenerator: IdGenerator
    ) {}

    public getPizzas = async (): Promise<IGetPizzasOutputDTO> => {

        const pizzasDB = await this.pizzaDatabase.getPizzas()

        const pizzas: Pizza[] = []

        for (let pizzaDB of pizzasDB) {
            const pizza = new Pizza(
                pizzaDB.name,
                pizzaDB.price,
                []
            )
            
            const ingredients = await 
                this.pizzaDatabase.getIngredients(pizzaDB.name)
            
            pizza.setIngredients(ingredients)

            pizzas.push(pizza)
        }

        const response: IGetPizzasOutputDTO = {
            message: "Pizzas retornadas com sucesso",
            pizzas: pizzas.map((pizza) => ({
                name: pizza.getName(),
                price: pizza.getPrice(),
                ingredients: pizza.getIngredients()
            }))
        }

        return response
    }

    public getPizzasV2 = async () => {

        const rawPizzasFormatted = await this.pizzaDatabase.getPizzasFormatted()

        const pizzas: any = []

        for (let rawPizza of rawPizzasFormatted) {
            const pizzaAlreadyOnArray = pizzas
                .find((pizza: any) => pizza.name === rawPizza.name)

            if (pizzaAlreadyOnArray) {
                pizzaAlreadyOnArray.ingredients.push(rawPizza.ingredient_name)
            } else {
                const pizza = {
                    name: rawPizza.name,
                    price: rawPizza.price,
                    ingredients: [ rawPizza.ingredient_name ]
                }

                pizzas.push(pizza)
            }
        }

        return {
            pizzas
        }
    }
}