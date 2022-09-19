import * as bcrypt from "bcryptjs";

export class HashManager {
    public async hash(text: string) : Promise<string> {
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALTS_ROUND));
        return bcrypt.hash(text, salt);
    }

    public async compare(text: string, hash:string): Promise<boolean> {
        return bcrypt.compare(text, hash)
    }
}