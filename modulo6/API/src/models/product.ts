export interface IProductDB {
    id: string,
    name: string
}

export class Product {
    constructor(
        private id: string,
        private name:  string

    ) {}

    public getId =() => {
        return this.id 
    }

    public getName = () => {
        return this.name 
    }

    public setId = (newid: string) => {
        return this.id = newid
    }

    public setName = (newName: string) => {
        return this.name= newName
    }

} 

export interface IGetProductOutputDTO {
    message: string,
    products: {
        id: string,
        name: string
    }
}