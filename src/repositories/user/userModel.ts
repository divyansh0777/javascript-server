import { IUser } from './IUserModel';
import * as mongoose from 'mongoose'
import schema from './userSchema'

export const user = mongoose.model('user', schema);
