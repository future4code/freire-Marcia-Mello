import { Relation } from "../entities/Relation";
import { BaseDatabase } from "./BaseDatabase";

export class UserRelationsDB extends BaseDatabase {
    private userRelationsTableName = "followers"
    
    private mapDBRelationToRelation(input?: any): Relation | undefined{
        return(
            input &&
            new Relation(
                input.followerUserId,
                input.userFollowedId
            )
        )
    }

    public async getUsersRelationsData(followerUserId: string, userFollowedId: string): Promise<Relation | undefined>{
        const relation = await BaseDatabase.connection.raw(`
            SELECT * 
            FROM ${this.userRelationsTableName}
            WHERE followerUserId = '${followerUserId}' AND userFollowedId = '${userFollowedId}';
        `);

        if(!relation[0][0]){
            return undefined;
        };

        return await this.mapDBRelationToRelation(relation[0][0]);
    }

    public async followUserRelation(followerUserId: string, userFollowedId: string): Promise<void>{
        await BaseDatabase.connection.raw(`
            INSERT INTO ${this.userRelationsTableName}(followerUserId, userFollowedId)
            VALUES('${followerUserId}', '${userFollowedId}');
        `);
    };

    public async unfollowUserRelation(followerUserId: string,userFollowedId: string): Promise<void>{
        await BaseDatabase.connection.raw(`
            DELETE FROM ${this.userRelationsTableName}
            WHERE followerUserId = '${followerUserId}' AND userFollowedId = '${userFollowedId}';
        `);
    }
}