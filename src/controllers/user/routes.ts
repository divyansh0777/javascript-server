import * as express from "express";
import UserController from "./controllers";

const userRouter = express.Router();

userRouter.post("/sign-in", UserController.signIn);
userRouter.get("/profile", UserController.profile);

export { userRouter };
