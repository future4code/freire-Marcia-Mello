import{Request, Response} from "express";
import insertUser from "../data/insertUser";
import selectUsers from "../data/selectUsers";
import { userInput, userInsert } from "../types";

export default async function getUsers(req: Request, res: Response){
    try {

        const allUsers = await selectUsers()
        res.status(200).send(allUsers)

    }catch (error:any) {
        res.status(400).send({message:error.message})    
    }
}