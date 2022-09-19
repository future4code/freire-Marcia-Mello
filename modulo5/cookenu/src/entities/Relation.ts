export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class Relation {
    constructor(
        private followerUserId: string,
        private userFollowedId: string
    ) { }
    
    public getFollowerUserId(): string {
        return this.followerUserId;
    }
    public setFollowerUserId(value: string) {
        this.followerUserId = value;
    }
    public getUserFollowedId(): string {
        return this.userFollowedId;
    }
    public setUserFollowedId(value: string) {
        this.userFollowedId = value;
    }
}