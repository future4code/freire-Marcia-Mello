// import { Request, Response } from "express";
// import { Authenticator } from "../classes";
// import { UsersDatabase } from "../data/UsersDatabase";


// export async function getRecipe(req: Request, res: Response) {
//     try {
//         const token = req.headers.authorization;

//         if (!token) {
//             res
//                 .status(422)
//                 .send("Esse endpoint exige uma autorização a ser passada nos headers.");

//         }


//     } catch (error: any) {
//         res.status(400).send(error.message);



//     }
// }