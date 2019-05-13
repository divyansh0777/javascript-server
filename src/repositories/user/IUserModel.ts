import { ObjectID } from "bson";
import * as mongoose from "mongoose";

export interface IUserModel extends mongoose.Document {
  _id: ObjectID;
  age: number;
  email: string;
  name: string;
  password: string;
  role: string;
}
