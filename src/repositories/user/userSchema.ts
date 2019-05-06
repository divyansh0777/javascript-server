import * as mongoose from 'mongoose'
import { ObjectID } from 'mongodb';

var userSchema = mongoose.Schema;

export default new userSchema({
  user : {
    _id: ObjectID,
    name: String,
    age: Number
  }
})
