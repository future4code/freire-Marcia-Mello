// import { Request, Response } from "express";
// import { IdGenerator } from "../services/idGenerator";
// import { UsersDatabase } from "../data/UsersDatabase";
// import { User } from "../entities/Users";


// export async function login(req: Request, res: Response) {
//     try {
//         const { email, password } = req.body;

//         if ( !email || !password  ) {
//             res
            // .status(422)
//             .send(
//                 "Insira corretamente as informações de  'email' e 'password'"
//             ); 
//         }
//         const userDatabase = new UsersDatabase();
//         const user = await userDatabase.findUserByEmail(email);


// const idGenerator = new IdGenerator();

//         const id = idGenerator.generate();

       
//         const hashManager = new HashManager();
//         const hashPassword = await hashManager.hash(password);

//         const newRecipe = new User(id, title, description, hashPassword, creation_date)
//         await userDatabase.createUser(newRecipe);

//         const authenticator = new Authenticator()
//         const token = authenticator.generate({id, creation_date})
//         res.status(200).send({message:'Receita criada com sucesso', token})
//     } catch (error:any) {
//     res.status(400).send(error.message);
// }