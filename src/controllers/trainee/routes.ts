import * as express from 'express'
import { default as traineeController } from './controllers'
import { check } from 'express-validator/check'
import  Schema  from '../schema'
import validator from '../validation'
import authMiddleWare  from '../.././config/libs/routes/authMiddleWare'

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

traineeRouter.post('/token-verify', authMiddleWare('getUsers', 'read'));


export default traineeRouter;
