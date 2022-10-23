export interface IOrderDB {
    id: string
}

export interface IOrderItemDB {
    id: string,
    pizza_name: string,
    quantity: number,
    order_id: string
}

export interface IOrderItem {
    id: string,
    pizza_name: string,
    price: number,
    quantity: number,
    order_id: string
}

export interface IOrderResume {
    id: string,
    pizzas: {
        name: string,
        quantity: number,
        price: number
    }[],
    total: number
}

export class Order {
    private total: number = 0

    constructor(
        private id: string,
        private orderItems: IOrderItem[],
    ) {
        this.total = this.calculateTotal()
    }

    private calculateTotal = () => {
        const total = this.orderItems.reduce(
            (acc, pizza) => acc + (pizza.price * pizza.quantity),
            0
        )

        return total
    }
    
    public getId = () => {
        return this.id
    }
    
    public getOrderItems = () => {
        return this.orderItems
    }

    public setOrderItems = (newOrderItems: IOrderItem[]) => {
        this.orderItems = newOrderItems
        this.total = this.calculateTotal()
    }

    public addOrderItem = (newOrderItem: IOrderItem) => {
        this.orderItems.push(newOrderItem)
        this.total = this.calculateTotal()
    }

    public removeOrderItem = (idToRemove: string) => {
        this.orderItems = this.orderItems.filter(orderItem => orderItem.id !== idToRemove)
        this.total = this.calculateTotal()
    }

    public getTotal = () => {
        return this.total
    }
}

export interface ICreateOrderInputDTO {
    pizzas: {
        name: string,
        quantity: number
    }[]
}

export interface ICreateOrderOutputDTO {
    message: string,
    order: IOrderResume
}

export interface IGetOrdersOutputDTO {
    orders: IOrderResume[]
}