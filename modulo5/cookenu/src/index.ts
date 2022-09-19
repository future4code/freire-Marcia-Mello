import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { signup } from "./endpoints/user/Signup";
import { FollowUserEndpoit } from "./endpoints/relations/followUser";
import { UnFollowUserEndpoit } from "./endpoints/relations/unfollowUser";

dotenv.config();

const app: Express = express()

app.use(express.json());
app.use(cors());

// app.get("/user", getRecipe);
app.post("/user", signup);
app.post("/user/follow", FollowUserEndpoit)
app.delete("/user/unfollow", UnFollowUserEndpoit)
// app.post("/user/login", login);

// server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});