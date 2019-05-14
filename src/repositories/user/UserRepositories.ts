import * as bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import { configuration } from "../../config/configuration";
import UserModel from "./UserModel";

class UserRepositories {
  public static generateObject() {
    return mongoose.Types.ObjectId();
  }

  public async encryptPass(value: string) {
    const result = await bcrypt.hash(value, configuration.saltPass);
    return result;
  }

  public async multipleSeeding(value) {
    const result = await UserModel.insertMany(value);
    return result;
  }

  public async totalCount() {
    const result = await UserModel.countDocuments();
    return result;
  }

  public count(query: any) {
      const result = UserModel.countDocuments(query);
      return result;
}

  public create(data: any) {
    const id = UserRepositories.generateObject();
    const model = UserModel.create({
      _id: id,
      ...data
    });
    // return model.save;
    }

    public async read(query) {
      const result = await UserModel.find(query, {password: 0});
      return result;
    }

    public async updateRole(query, update) {
      console.log(update);
      const found = await UserModel.find(query, { role: 1});
      if (!found) {
        throw new Error();
      }
      const result = await UserModel.updateOne(query, update);
      return result;
    }

    public async delete(query) {
      const { role } = query;
      const result = await UserModel.deleteOne(query);
      return result;
    }
}

export default new UserRepositories();
