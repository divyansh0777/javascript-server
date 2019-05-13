import * as mongoose from "mongoose";
<<<<<<< HEAD
import { IUser } from "./IUserModel";
import userSchema from "./userSchema";

export const user = mongoose.model<IUser>("user", userSchema);
=======
import schema from "./userSchema";

export const user = mongoose.model("user", schema);
>>>>>>> develop
