import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { User } from "./typings";
import { userList } from "./usersList";

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
// Exercicio 1

app.get("/users", (req: Request, res: Response) => {
    try {
        res.status(200).send("user")
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})
// a = Get
// b = "/users"

// Exercicio 4
app.post("/createUsers", (req: Request, res: Response) => {
    try {

        const user: User = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.type
        }

        userList.push(user);

        res.status(200).send(userList)
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})
