import axios from "axios"
import{ Request, Response} from "express"
import insertAddressDb from "../data/insertAdressDB"
import {getFullAddress} from "../services/getFullAddress"

export const insertAddress = async (req: Request, res: Response) => {
  try{
    const cep = req.params.cep

    const address = await getFullAddress(cep)
    if(!address || undefined){
        throw new Error("Cep inválido")
    }
    await insertAddressDb(address)
    res.send(200).send("Endereço criado com sucesso")
    // quero inserir ele no banco
    
}catch(error:any) {
    res.status(500).send(error.message)
}

}