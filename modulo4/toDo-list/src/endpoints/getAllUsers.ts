import {Request, Response} from "express";
import getAllUserByDB from "../data/getAllUserByDB";
import { User } from "../types";

const getAllUsers = async (req: Request, res: Response) => {
   try {
      const userList: User[] = await getAllUserByDB();

      res.status(200).send({ users: userList});
   } catch (error: any) {
      res.status(res.statusCode).send({
         message: error.message
      })
   }
}

export default getAllUsers;