import * as express from "express";
import { check } from "express-validator/check";
import authMiddleWare from "../.././config/libs/routes/authMiddleWare";
import Schema from "../schema";
import validator from "../validation";
import { default as traineeController } from "./controllers";

Object.freeze(traineeController);
const traineeRouter = express.Router();

traineeRouter.get("/trainee/get", traineeController.getRequest);
traineeRouter.put("/trainee/put", traineeController.putRequest);
traineeRouter.delete("/trainee/delete", traineeController.deleteRequest);

traineeRouter.post("/trainee/post", [
  check("id", "Enter valid ID").isLength({max: 2}),
  check("email", "Enter valid email").isEmail()
], traineeController.postDataCheck);

traineeRouter.post("/trainee/post-schema", validator(Schema.post), traineeController.postSchemaCheck);

traineeRouter.post("/post-token-verify", authMiddleWare("getUsers", "read"));

export default traineeRouter;
