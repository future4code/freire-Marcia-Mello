// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config();

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

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

const searchActor = async (name: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Actor WHERE name = '${name}`
   )

   return result[0] [0]
}

const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor Where gender = "${gender}"
   `);
   const count = result [0] [0]. count;
   return count;
};