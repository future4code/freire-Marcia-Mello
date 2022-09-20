import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { userDTO } from "../models/User"

export class UserController {

    async create(req: Request, res: Response) {
        try{
            const { nome , email, senha, role } = req.body 

            const UserBusiness = new UserBusiness()

            const user: userDTO = {
                nome,
                email,
                senha,
                role

            }

            const token = await UserBusiness.create(user)

            res.status(201).send({ message:token })

        }catch (error:any) {
            res.status(error.statusCode || 500).send({ message: error.message})
        }
    }
}

export default UserController