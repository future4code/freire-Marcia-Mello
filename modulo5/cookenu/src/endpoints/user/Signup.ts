import { Request, Response } from "express";
import { IdGenerator } from "../../services/idGenerator";
import { UsersDatabase } from "../../data/UsersDatabase";
import { User } from "../../entities/Users";
import { HashManager } from "../../services/HashManager";
import { Authenticator } from "../../services/Authenticator";

export async function signup(req: Request, res: Response) {
    try {
        const {nome, email, password } = req.body;

        if (!nome || !email || !password ) {
            res
            .status(422)
            .send(
                "Insira corretamente as informações de 'nome', 'email', 'password' e 'idade' "
            );
        }
        const userDatabase = new UsersDatabase();
        const user =await userDatabase.findUserByEmail(email);
        
        if (user) {
            res.status(409).send('Este email já esta cadastrado');
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
       
        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password);

        const newUser = new User(id, nome, email, hashPassword)
        
        await userDatabase.createUser(newUser);

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, password}, process.env.ACCESS_TOKEN_TIME as string)
        res.status(200).send({message:'Usuário criado com sucesso', token})
    } catch (error:any) {
    res.status(400).send(error.message);
 }
}