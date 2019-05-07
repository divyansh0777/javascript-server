import * as express from "express";
import { check } from "express-validator/check";
import authMiddleWare from "../.././config/libs/routes/authMiddleWare";
import * as constants from "../../utils/constants";
import Schema from "../schema";
import validator from "../validation";
import { default as traineeController } from "./controllers";

Object.freeze(traineeController);
const traineeRouter = express.Router();

traineeRouter.get("/get", authMiddleWare(constants.MODULE_USER, constants.PERMISSION_READ),
  validator(Schema.get), traineeController.getRequest);

traineeRouter.post("/delete", authMiddleWare(constants.MODULE_USER, constants.PERMISSION_WRITE),
  validator(Schema.get), traineeController.postRequest);

traineeRouter.put("/put", authMiddleWare(constants.MODULE_USER, constants.PERMISSION_WRITE),
 validator(Schema.get), traineeController.putRequest);

traineeRouter.delete("/delete", authMiddleWare(constants.MODULE_USER, constants.PERMISSION_DELETE),
 validator(Schema.get), traineeController.deleteRequest);

traineeRouter.post("/post-check", [
  check("id", "Enter valid ID").isLength({max: 2}),
  check("email", "Enter valid email").isEmail()
  ]
    , traineeController.postCheck);

export default traineeRouter;
