import { IIngredientsDB, IPizzaDB, IPizzasIngredientsDB } from "../../models/Pizza";

// seeds

export const pizzasSeed: IPizzaDB[] = [
    {
        "name": "Margherita",
        "price": 5
    },
    {
        "name": "Bufala",
        "price": 6
    },
    {
        "name": "Romana",
        "price": 5
    },
    {
        "name": "Diavola",
        "price": 7.5
    },
    {
        "name": "Pizza Bianca",
        "price": 5
    }
]

export const ingredientsSeed: IIngredientsDB[] = [
    {
        name: "tomato"
    },
    {
        name: "mozzarella"
    },
    {
        name: "mozarella di bufala"
    },
    {
        name: "anchovies"
    },
    {
        name: "oregano"
    },
    {
        name: "oil"
    },
    {
        name: "spicy salami"
    }
]

export const pizzasIngredientsSeed: IPizzasIngredientsDB[] = [
    {
        pizza_name: "Margherita",
        ingredient_name: "tomato"
    },
    {
        pizza_name: "Margherita",
        ingredient_name: "mozzarella"
    },
    {
        pizza_name: "Bufala",
        ingredient_name: "tomato"
    },
    {
        pizza_name: "Bufala",
        ingredient_name: "mozarella di bufala"
    },
    {
        pizza_name: "Romana",
        ingredient_name: "tomato"
    },
    {
        pizza_name: "Romana",
        ingredient_name: "mozzarella"
    },
    {
        pizza_name: "Romana",
        ingredient_name: "anchovies"
    },
    {
        pizza_name: "Romana",
        ingredient_name: "oregano"
    },
    {
        pizza_name: "Romana",
        ingredient_name: "oil"
    },
    {
        pizza_name: "Diavola",
        ingredient_name: "tomato"
    },
    {
        pizza_name: "Diavola",
        ingredient_name: "mozzarella"
    },
    {
        pizza_name: "Diavola",
        ingredient_name: "spicy salami"
    },
    {
        pizza_name: "Pizza Bianca",
        ingredient_name: "mozzarella"
    },
    {
        pizza_name: "Pizza Bianca",
        ingredient_name: "oregano"
    }
]