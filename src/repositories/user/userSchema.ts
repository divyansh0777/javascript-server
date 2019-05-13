import * as mongoose from "mongoose";

const userSchema = mongoose.Schema;

export default new userSchema({
  user : {
    age: Number,
    name: String
  }
});
