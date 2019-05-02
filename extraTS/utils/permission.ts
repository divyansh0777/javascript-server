import { IHasPermission } from '../interfaces';
import * as constants from '../constants'

let permission = {
  [constants.MODULE_USER]: {
    [constants.PERMISSION_ALL] : [constants.HEAD_TRAINER],
    [constants.PERMISSION_READ] : [constants.TRAINEE, constants.TRAINER],
    [constants.PERMISSION_WRITE] : [constants.TRAINER],
    [constants.PERMISSION_DELETE]: []
  }
}

let hasPermission: IHasPermission;

hasPermission = (moduleName, role:String, permissionType:string ) => {
  return permission[moduleName][constants.PERMISSION_ALL].indexOf(role)!==-1 ||
    permission[moduleName][permissionType].indexOf(role)!==-1;
}

export { hasPermission };
