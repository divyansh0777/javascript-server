import { ObjectId } from "bson";
import { IVersionableModel } from "./../versionable/IVersionableModel";
export interface IUserModel extends IVersionableModel {
  _id: ObjectId;
  age: number;
  email: string;
  image: any;
  name: string;
  password: string;
  role: string;
}
