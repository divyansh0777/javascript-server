import * as express from "express";
import { check, validationResult } from "express-validator/check";
import authMiddleWare from "../.././config/libs/routes/authMiddleWare";
import Schema from "../schema";
import schema from "../schema";
import validator from "../validation";

const userRouter = express.Router();

userRouter.post("/sign-up", validator(schema.post),  );

export { userRouter };
