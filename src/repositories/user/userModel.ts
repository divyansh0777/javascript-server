import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import userSchema from "./userSchema";

export default mongoose.model<IUserModel>("user", userSchema);
