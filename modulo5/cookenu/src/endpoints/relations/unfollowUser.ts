import { Request, Response } from "express";
import { UserRelationsDB } from "../../data/UserRelationsDatabase";

export const UnFollowUserEndpoit = async(req: Request, res: Response) => {
    try{
        const auth = req.headers.Authorization || req.headers.authorization;

        const relation = {
            id: auth as string,
            userFollowedId: req.body.userFollowedId
        };

        const userRelation = new UserRelationsDB;

        userRelation.followUserRelation(relation.id, relation.userFollowedId)

        res.status(200).send("Usuário seguido com sucesso!");
    } catch(error: any){
        res.status(400).send({
            message: error.message
        });
    };
}