import { IOrderDB, IOrderItemDB } from "../models/Order"
import { BaseDatabase } from "./BaseDatabase"
import { PizzaDatabase } from "./PizzaDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "Amb_Orders"
    public static TABLE_ORDER_ITEMS = "Amb_Order_Items"

    public createOrder = async (orderId: string): Promise<void> => {
        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS)
            .insert({
                id: orderId
            })
    }

    public insertItemOnOrder = async (orderItem: IOrderItemDB): Promise<void> => {
        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .insert(orderItem)
    }

    public getPrice = async (pizzaName: string): Promise<number | undefined> => {
        const result: any[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select("price")
            .where({ name: pizzaName })
    
        return result[0].price as number
    }

    public getOrders = async (): Promise<IOrderDB[]> => {
        const result: IOrderDB[] = await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS)
            .select()

        return result
    }

    public getOrderItem = async (orderId: string): Promise<IOrderItemDB[]> => {
        const result: IOrderItemDB[] = await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDER_ITEMS)
            .select()
            .where({ order_id: orderId })

        return result
    }
}