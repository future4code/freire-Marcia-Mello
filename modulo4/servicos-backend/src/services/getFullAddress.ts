import axios from "axios";
import {Request, Response} from "express";
import {Address} from "../types/typeAddress";

export const getFullAddress = async (cep:string): Promise<Address | undefined> =>{
 try{
    
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    const address: Address = {
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
    return address;

} catch (error: any) {
    return undefined;
        
    }
}






