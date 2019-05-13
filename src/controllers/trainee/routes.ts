import * as express from "express";
import { check } from "express-validator/check";
import { authMiddleWare } from "../.././config/libs/routes/authMiddleWare";
import Schema from "../schema";
import validator from "../validation";
import traineeController from "./controllers";

Object.freeze(traineeController);

const traineeRouter = express.Router();
Object.freeze(traineeRouter);

traineeRouter.get("/", traineeController.getTrainee);
traineeRouter.put("/", traineeController.putRequest);
traineeRouter.delete("/", traineeController.deleteRequest);
traineeRouter.post("/", traineeController.postRequest);

traineeRouter.post("/schema", validator(Schema.post), traineeController.postSchemaCheck);

traineeRouter.post("/token", authMiddleWare("getUsers", "read"));

export default traineeRouter;
