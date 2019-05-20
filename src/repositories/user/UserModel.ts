import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import { UserSchema } from "./UserSchema";

const Schema = new UserSchema({
  collections: "user"
});

export default mongoose.model<IUserModel>("user", Schema);
