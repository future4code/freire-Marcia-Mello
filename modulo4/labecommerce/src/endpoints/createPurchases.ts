import{Request, Response} from "express";
import selectUser from "../data/selectUser";
import{ purchaseData } from "../Types/typePurchase";
import selectProduct from "../data/selectProduct";

export default async function createPurchases(req: Request, res: Response) {
    try{
        const { userId, productId, quantity } =req.body

        if(!userId || !productId || !quantity) {
            throw new Error("Os valores precisam ser passados") 
        }

        const userAlreadyExist = await selectUser(userId)
       
        if(!userAlreadyExist) {
            throw new Error (`O id do usuário ${userId} não encontrado`)
        }

        const productAlreadyExist = await selectProduct(productId)
       
        if(!productAlreadyExist){
            throw new Error(`id ${productId} não encontrado`)

        }

        const totalPrice = productAlreadyExist.price * quantity;
       
        const purchase: purchaseData={
            id:Date.now.toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        const anwser = await insertPurchase(purchase)


    }catch (error:any) {
        res.status(500).send({message:error.message})
    }
}