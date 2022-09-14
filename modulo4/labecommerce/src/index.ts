import express, {Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from  "dotenv";
import knex from "knex";
import createUser from "./endpoints/createUser";
import getUsers from "./endpoints/getUsers";
import createProducts from "./endpoints/createProducts";
import getProducts from "./endpoints/getProducts";


dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user,createUser")
app.get("/users,getUsers")

app.post("/products,createProducts")
app.get("/products.getProducts")

app.post("/purchases,createPurchases")

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error('Failure upon starting server.');
    }
});

// estabelecer a conexão com o banco no index.ts:

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});