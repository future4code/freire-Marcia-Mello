import {IProductDB, Product} from "../models/product"
import {BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Products_Catalog"
}

public toProductDBModel = (product: Product): IProductDB => {
    return {
        id: product.getId(),
        name: product.getName()
    }

}

public getProducts = async (): Promise<IProductDB[]> => {
    const result: IProductDB[] = await BaseDatabase
    .connection(ProductDatabase.TABLE_PRODUCTS)
    .select()
    return result
}