import { IConfig } from './IConfig';
import * as dotEnv from 'dotenv'
dotEnv.config();

let configure: IConfig;
configure = Object.freeze({
  port: process.env.port ,
  node_env: process.env.node_env,
  token_Key: process.env.token_Key
});

export { configure };
