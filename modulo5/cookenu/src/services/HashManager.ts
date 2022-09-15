import * as bcrypt from "bcrypt";

export class HasManager {
    public async hash(text: string) : Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        return bcrypt.hash(text, salt);

    }

    public async compare(text: string, hash:string): Promise<boolean> {
        return bcrypt.compare(text, hash)
    }
}