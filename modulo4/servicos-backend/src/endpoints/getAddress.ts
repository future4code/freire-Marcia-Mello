import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../types/typeAddress"


export const getAddress = async (req: Request, res: Response) => {
    try {

        const cep = req.params.cep;

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }

        res.status(200).send(address)

    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
}