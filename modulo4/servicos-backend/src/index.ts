import { AddressInfo } from "net";
import app from "./types/app";
import {getAddress} from "./endpoints/getAddress";
import {getAllAddress} from "./endpoints/getAllAddress";
import {insertAddress} from "./endpoints/insertAddress";

app.get("/endereco/:cep", getAddress)
app.post("/user/:cep", insertAddress)
app.get("/list",getAllAddress)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error('Failure upon starting server.');
    }
});