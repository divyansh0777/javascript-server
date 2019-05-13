import * as mongoose from "mongoose";

export interface IUserModel extends mongoose.Document {
  age: number;
  email: string;
  name: string;
  password: string;
  role: string;
}
