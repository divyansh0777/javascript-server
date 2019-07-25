import * as express from "express";
import { body, check, checkSchema } from "express-validator/check";
import { buildSanitizeFunction, sanitize, sanitizeBody } from "express-validator/filter";
import authMiddleWare from "../.././config/libs/routes/authMiddleWare";
import * as constants from "../../utils/constants";
import validator from "../validation";
import traineeController from "./controllers";

Object.freeze(traineeController);
const sanitizeBodyAndQuery = buildSanitizeFunction(["body", "query"]);

const traineeRouter = express.Router();
Object.freeze(traineeRouter);

traineeRouter.get("/", traineeController.getTrainee);
traineeRouter.put("/", traineeController.putRequest);
traineeRouter.delete("/", traineeController.deleteRequest);
traineeRouter.post("/", traineeController.postRequest);
traineeRouter.post("/schema", [ sanitize("id").toInt() ], validator, traineeController.postSchemaCheck);

// traineeRouter.post("/schema", [ sanitizeBodyAndQuery("id").toInt()  ], validator, traineeController.postSchemaCheck);

// traineeRouter.post("/schema", checkSchema({
//   id: {
//     errorMessage: "ID is wrong",
//     in: ["body"],
//     isInt: true,
//     toInt: true,
//   }
// }), traineeController.postSchemaCheck);

traineeRouter.get("/token", authMiddleWare("getUsers", "read"));

export default traineeRouter;
