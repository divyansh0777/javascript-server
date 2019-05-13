import * as mongoose from "mongoose";
import { IUser } from "./IUserModel";
import userSchema from "./userSchema";

export const user = mongoose.model<IUser>("user", userSchema);
