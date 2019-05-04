import * as express from 'express'
import { default as traineeController } from './controllers'
import {check, checkSchema, validationResult } from 'express-validator/check'
import  Schema  from '../schema'
import validator from '../validation'

Object.freeze(traineeController);
const traineeRouter = express.Router();

traineeRouter.get('/get', traineeController.getRequest);
traineeRouter.put('/put', traineeController.putRequest);
traineeRouter.delete('/delete', traineeController.deleteRequest);
traineeRouter.delete('/trainee/delete', traineeController.deleteRequest);

traineeRouter.post('/trainee/post', [
  check('id', 'Enter valid ID').isLength({max:2}),
  check('email', 'Enter valid email').isEmail()
], traineeController.postDataCheck);

traineeRouter.post('/trainee/post-schema', validator(Schema.post), traineeController.postSchemaCheck);


export default traineeRouter;
