import * as express from 'express'
import { default as traineeController } from './controllers'
import {check, checkSchema, validationResult } from 'express-validator/check'
import { schema } from '../schema'

Object.freeze(traineeController);
const traineeRouter = express.Router();

traineeRouter.get('/trainee/get', traineeController.getRequest);
traineeRouter.put('/trainee/put', traineeController.putRequest);
traineeRouter.delete('/trainee/delete', traineeController.deleteRequest);
traineeRouter.post('/trainee/post', [
  check('email', 'Enter valid email').isEmail(),
  check('id', 'Enter valid ID').isLength({max:2})
], traineeController.postDataCheck)

export default traineeRouter;
