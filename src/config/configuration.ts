import { IConfig } from './IConfig';
import * as dotEnv from 'dotenv'
dotEnv.config();

let configure: IConfig;
configure = Object.freeze({
  port: process.env.port || 9000 || 9001,
  node_env: process.env.node_env
});

export { configure };
