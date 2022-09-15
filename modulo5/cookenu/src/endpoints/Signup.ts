import { Request, Response } from "express";
import { IdGenerator } from "../services/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/Users";

export async function signup(req: Request, res: Response) {
    try {
        const {name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            res
            .status(422)
            .send(
                "Insira corretamente as informações de 'name', 'email', 'password' e 'role' "
            );
        }
        const userDatabase = new UserDatabase();
        const user = userDatabase.findUserByEmail(email);
        
        if (user) {
            res.status(409).send('Este email já esta cadastrado');
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

       
        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, hashPassword, role)
        await userDatabase.createUser(newUser);

        
    } catch (error:any) {
    res.status(400).send(error.message);
 }
}