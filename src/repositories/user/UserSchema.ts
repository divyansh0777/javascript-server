import * as mongoose from "mongoose";

const UserSchema = mongoose.Schema;

export default new UserSchema({
  age: Number,
  email: String,
  name: String,
  password: String,
  role: String
});
