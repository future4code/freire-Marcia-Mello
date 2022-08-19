import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { User } from "./typings";
import { users } from "./usersList";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error('Failure upon starting server.');
    }
});

const getAge = (year: string) => {{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - Number(year);
    return age; 
}}

app.post("/users/cadastro", async (req: Request, res: Response) => {
    try {

        const birthdate = req.body.birthdate?.split("/");
        const year = birthdate[2];
        
        const age = getAge(year);

        if(age < 18){
            res.send("Você precisa ter ao menos 18 anos para se cadastrar!")
            return
        }

        console.log(age)
        const user: User = {
            cpf: req.body.cpf,
            name: req.body.name,
            birthdate: req.body.birthdate,
            balance: 0,
            transactions: req.body.transactions
        }

        await users.push(user);

        res.status(200).send(users)

    } catch (error: any) {
        throw new Error("Não foi possível cadastrar o usuário, revise os dados por favor!")
    }
})

app.get("/users", async (req: Request, res: Response) => {
    try {
        res.status(200).send(users)
    } catch (error: any) {
        throw new Error("Não foi possível cadastrar o usuário, revise os dados por favor!")
    }
})
