import { productsData } from "../Types/typeProducts";
import connection from "./baseDataBase";


export default async function selectProduct(productId:string):Promise<productData | undefined> {

    const [result]= await connection("labecommerce_products").select("*").where({id:product.id})

    if(result){
        const productType:productsData = {
            id:result.id,
            name:result.name,
            price:result.price,
            image_url:result.image_url
        }
        return productType

    }else{
        return undefined
    }
}