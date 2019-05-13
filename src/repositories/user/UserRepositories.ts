import * as bcrypt from "bcrypt";
import { configure } from "../../config/configuration";
import VersionableRepository from "../versionable/VersionableRepository";
import UserModel from "./UserModel";

class UserRepositories extends VersionableRepository {

// tslint:disable-next-line: no-shadowed-variable
  constructor(UserModel) {
    super(UserModel);
  }

  public async encryptPass(value: string) {
    const result = await bcrypt.hash(value, configure.saltPass);
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

  public async comparePassword(query: any = {}) {
    const { email, password, encryptPass } = query;
    const storedPass = await this.findPassword({email});
    console.log(query.encryptPass);
    console.log("Pass----", storedPass);
    const found = await bcrypt.compare(, query.encryptPass);
    if (!found) {
      throw new Error();
    }
    return found;
  }

  public async count(query: any =  {}) {
    const result = await UserModel.countDocuments(query);
    return result;
  }

  public async findPassword(query: any =  {}) {
    const result = await UserModel.find(query, {password: 1, _id: 0});
    return result;
  }

}

export default new UserRepositories(UserModel);
