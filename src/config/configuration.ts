import { IConfig } from './IConfig';
import * as dotEnv from 'dotenv'
dotEnv.config();

const configure: IConfig = Object.freeze({
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  tokenKey: process.env.TOKEN_KEY,
  mongoUrl: process.env.MONGO_URL
});

export { configure };
