import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import app from "./app"
import editUser from "./endpoints/editUser"
import createUser from "./endpoints/createUser"
import { Authenticator } from "./services/Authenticator";
import {AuthenticatioData} from "./types"
import login from "./endpoints/login"


app.post(`/user/signup`, createUser)
app.put(`/user/edit`, editUser)
app.post(`/user/login`, login)

const testandoHash = async() => {
    const password = "labenu"
    const instanceHash = new HashManager()
    const hash = await instanceHash.hash(password)
    console.log("HASH----->",hash)


    


}
testandoHash()







// // const app = express();

// app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//         console.error('Failure upon starting server.');
//     }
// });