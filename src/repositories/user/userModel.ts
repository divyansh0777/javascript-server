import * as mongoose from "mongoose";
import { IUser } from "./IUserModel";
import userSchema from "./userSchema";

export default mongoose.model<IUser>("user", userSchema);
