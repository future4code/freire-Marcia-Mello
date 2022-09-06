import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { customer } from "./customer";


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

class User {
	// demais implementações

	public interoduceYourself(): string {
			return `Olá, sou ${this.name}. Bom dia!`;
	}
}