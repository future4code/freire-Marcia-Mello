import{Request, Response} from "express";
import selectAllProducts from "../data/selectAllProducts"; 
;

export default async function getProducts(req: Request, res: Response){
    try {

        const allProducts = await selectAllProducts()

        if(!allProducts?.length){
            throw new Error("Produto não cadastrado")
        }

        res.status(200).send({allProducts})

    }catch (error:any) {
        res.status(400).send({message:error.message})    
    }
}