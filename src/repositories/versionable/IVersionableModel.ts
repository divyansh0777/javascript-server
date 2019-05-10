import { IUserModel } from "../user/IUserModel";

export interface IVersionableModel extends IUserModel {
  createdAt: any;
  modifiedAt: any;
}
