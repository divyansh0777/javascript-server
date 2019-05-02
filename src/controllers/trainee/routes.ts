import * as express from 'express'
import traineeController from './controllers'

Object.freeze(traineeController);
const traineeRouter = express.Router();

traineeRouter.get('/get', traineeController.getRequest);
traineeRouter.put('/put', traineeController.putRequest);
traineeRouter.delete('/delete', traineeController.deleteRequest);

export default traineeRouter;
