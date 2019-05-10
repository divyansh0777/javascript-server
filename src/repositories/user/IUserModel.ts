import { ObjectId } from "bson";
import * as mongoose from "mongoose";

export interface IUserModel extends mongoose.Document {
  _id: ObjectId;
  age: number;
  email: string;
  name: string;
  password: string;
  role: string;
}
