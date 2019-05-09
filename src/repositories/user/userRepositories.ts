import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as mongoose from "mongoose";
import { configure } from "../../config/configuration";
import UserModel from "./userModel";
import userModel from "./userModel";
class UserRepositories {
  public static generateObject() {
    return mongoose.Types.ObjectId();
  }

  public async encryptPass(value: string) {
    const result = await bcrypt.hash(value, configure.saltPass);
    return result;
  }

  public multipleSeeding(value) {
    console.log("Seeding Done");
    const result = userModel.insertMany(value);
    return result;
  }

  public count(query: any =  {}) {
    const result = UserModel.countDocuments(query);
    return result;
  }

  public async getData(query) {
    const result = await UserModel.find(query, {password: 0});
    return result;
  }

  public async create(data: any) {
    const id = await UserRepositories.generateObject();
    const model = UserModel.create({
      _id: id,
      ...data
    });
  }
}

export default new UserRepositories();
