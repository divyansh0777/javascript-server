import * as express from "express";
import UserController from "./controllers";

const userRouter = express.Router();

userRouter.get("/", UserController.getUsers);
userRouter.post("/sign-in", UserController.signIn);
userRouter.get("/profile", UserController.profile);
userRouter.post("/sign-up", UserController.create);
userRouter.post("/profile/update-role", UserController.updateRole);
userRouter.delete("/profile/delete", UserController.delete);

export { userRouter };
