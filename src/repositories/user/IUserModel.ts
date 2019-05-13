import { ObjectId } from "bson";
import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  age: number;
  email: string;
  name: string;
  password: string;
  role: string;
}
