import {Address} from "../types/typeAddress";
import {connection} from "./connections";

export default async function selectAllAdress() {
    const result = await connection("servicos_adress")
    .select("*")
    return result
    
}