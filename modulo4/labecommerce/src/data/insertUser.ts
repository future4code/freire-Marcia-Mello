import {userInsert} from "../types";
import connection from "./baseDataBase";

export default async function insertUser(insertUser: userInsert):Promise< string >{

    const { id, name, email, password } = insertUser

    await connection("labecommerce_users")
    .insert({
        id,
        name,
        email,
        password
    })

    return `usuario ${name} criado com sucesso!`
}