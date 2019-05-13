import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import userSchema from "./UserSchema";

export const user = mongoose.model<IUserModel>("user", userSchema);
