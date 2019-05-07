import * as mongoose from "mongoose";
import * as userModel from "./userModel";

class UserRepositories {
  public static generateObject() {
    return mongoose.Types.ObjectId();
  }

  public count(query: any) {
      const result = userModel.user.countDocuments(query);
      return result;
}

  public create(data: any) {
    const id = UserRepositories.generateObject();
    const model = userModel.user.create({
      _id: id,
      ...data
    });
    // return model.save;
    }
}

export default new UserRepositories();
