import * as mongoose from "mongoose";

const userSchema = mongoose.Schema;

export default new userSchema({
<<<<<<< HEAD
  age: Number,
  email: String,
  name: String
=======
  user : {
    age: Number,
    name: String
  }
>>>>>>> develop
});
