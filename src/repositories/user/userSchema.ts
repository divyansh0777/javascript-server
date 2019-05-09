import * as mongoose from "mongoose";

const userSchema = mongoose.Schema;

export default new userSchema({
  age: Number,
  email: String,
  name: String,
  password: String,
  role: String
});
