import {Request, Response } from "express";
import { UsersDatabase } from "../../data/UsersDatabase";
import { User } from  "../../entities/Users";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager"
import { IdGenerator } from "../../services/idGenerator";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            res
            .status(422)
            .send(
                "Insira corretamente as informações de  'email' e 'password'"
            ); 
        }
        const userDatabase = new UsersDatabase();
        const user = await userDatabase.findUserByEmail(email);

        if (!user) {
            res.status(409).send("Esse email não esta cadastrado");
        }
        
        const manager = new HashManager();
        const passwordIsCorrect = manager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send('Email ou senha incorreto')
        }

        const authenticator = new Authenticator();
        const token = authenticator.generate({id: user.getId(), password: user.getPassword()}, process.env.ACCESS_TOKEN_TIME as string);
        res.status(200).send({ message: "Usuario logado com sucesso", token});

    }catch (error: any) {
        res.status(400).send(error.message);
    }
}