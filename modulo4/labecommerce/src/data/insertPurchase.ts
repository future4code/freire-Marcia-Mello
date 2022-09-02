;import { purchaseData } from "../Types/typePurchase";
import connection from "./baseDataBase";

export default async function insertPurchase(purchase: purchaseData):Promise< string >{

    const { id, userId, productId, quantity, totalPrice  } = purchase

    await connection("labecommerce_purchases").insert({
        id: Date.now().toString,
        userId,
        productId,
        quantity,
        totalPrice
    })

    

    return `Compra ${purchase.id} realizada com sucesso!`
}