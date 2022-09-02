import{Request, Response} from "express";
import{ productsData, productsInsert} from "../types/typeProducts";

export default async function createProducts( req:Request, res:Response ) {
    try{

        const{ name, price, image_url }: productsInsert = req.body

        if(!name || !price || !image_url) {
            throw new Error("Dados incompletos!")
        }

        const productsData:productsData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        const anwser = await insertProduct(productsData) 
     
        res.status(200).send({ message: anwser})

    } catch(error: any) {
        res.status(400).send({ message:error.message })

    }
}