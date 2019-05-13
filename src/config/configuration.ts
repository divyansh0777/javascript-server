import * as dotEnv from "dotenv";
import { IConfig } from "./IConfig";
dotEnv.config();

export const configuration: IConfig = Object.freeze({
  mongoUrl: process.env.MONGO_URL,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  tokenKey: process.env.TOKEN_KEY
});
