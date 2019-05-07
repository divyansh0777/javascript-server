import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  _id: any;
  name: string;
  age: number;
  email: string;
}
