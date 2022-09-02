import{Request, Response} from "express";
import insertUser from "../data/insertUser";
import { userInput, userData } from "../types";

export default async function createUser( req:Request, res:Response ) {
    try{

        const{ name, email, password}: userInput = req.body

        if(!name || !email || !password) {
            throw new Error("Dados incompletos!")
        }

        const userInsert: user = {
            id: Date.now().toString(),
            name,
            email,
            password
        }
        const anwser = await insertUser(userInsert) 
     
        res.status(200).send({ message: anwser})

    } catch(error: any) {
        res.status(400).send({ message:error.message })

    }
}