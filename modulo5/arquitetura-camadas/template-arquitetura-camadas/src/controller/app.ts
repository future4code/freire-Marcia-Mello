import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";

export const app :Express = express()

app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
;
console.log ('Server is running in http://localhost: $(address')
} else {
    console.log.error('Failure upon starting server.');
}

})