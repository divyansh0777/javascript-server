import { IConfig } from './IConfig';
import * as dotEnv from 'dotenv'
dotEnv.config();

// console.log('---------------------------');
// console.log('PORT - ' + process.env.port + ' inside configuration');
// console.log('---------------------------');

let configure: IConfig;
configure = Object.freeze({
  port: process.env.port,
  node_env: process.env.node_env
});

export {configure};
