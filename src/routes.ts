import * as express from "express";
import { traineeRouter } from "./controllers/trainee";
import { userRouter } from "./controllers/user";

const route = express.Router();

route.use("/trainee", traineeRouter);
route.use("/user", userRouter);

export { route };
