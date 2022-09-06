import {Address} from "../types/typeAddress";
import {connection} from "./connections";

export default async function insertAdressDb(adress :Address) {


    const {logradouro, bairro, cidade, estado} = adress
    const id_user:string = Date.now().toString()

    await connection("servicos_address").insert({
        id_user,
        logradouro,
        bairro,
        cidade,
        estado
    })


}