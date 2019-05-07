import * as constants from "./constants";
import { IHasPermission } from "./interfaces";

const permission = {
  [constants.MODULE_USER]: {
    [constants.PERMISSION_ALL] : [constants.HEAD_TRAINER],
    [constants.PERMISSION_READ] : [constants.TRAINEE, constants.TRAINER],
    [constants.PERMISSION_WRITE] : [constants.TRAINER],
    [constants.PERMISSION_DELETE]: []
  }
};

let hasPermission: IHasPermission;

hasPermission = (moduleName, role, permissionType: string ) => {
  return permission[moduleName][constants.PERMISSION_ALL].indexOf(role) !== -1 ||
    permission[moduleName][permissionType].indexOf(role) !== -1;
};

export {hasPermission};
