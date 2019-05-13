import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import UserSchema from "./UserSchema";

export default mongoose.model<IUserModel>("user", UserSchema);
