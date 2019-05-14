import * as mongoose from "mongoose";

export default class VersionableRepository {
  private Model;

  constructor(UserModel: any) {
    this.Model = UserModel;
  }

  public async generateObject() {
    return await mongoose.Types.ObjectId();
  }

  public async create(data) {
    const id = await this.generateObject();
    try {
    const result = await this.Model.create({
      _id: id,
      ...data
    });
    return result;
    } catch (error) {
      throw new Error();
    }
  }

  public async read(query) {
    const result = await this.Model.find(query, {password: 0});
    return result;
  }

  public async updateRole(query, update) {
    console.log(update);
    const found = await this.Model.find(query, { role: 1});
    if (!found) {
      throw new Error();
    }
    const result = await this.Model.updateOne(query, update);
    return result;
  }

  public async delete(query) {
    const { role } = query;
    const result = await this.Model.deleteOne(query);
    return result;
  }

}
