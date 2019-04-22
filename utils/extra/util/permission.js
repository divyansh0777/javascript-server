import * as constants from '../constants'

let permission = {
  [constants.MODULE_USER]: {
    [constants.PERMISSION_ALL] : [constants.HEAD_TRAINER],
    [constants.PERMISSION_READ] : [constants.TRAINEE, constants.TRAINER],
    [constants.PERMISSION_WRITE] : [constants.TRAINER],
    [constants.PERMISSION_DELETE]: []
  }
}

export default function hasPermission ( moduleName, role, permissionType) {
  return permission[moduleName][constants.PERMISSION_ALL].indexOf(role)!==-1 || 
    permission[moduleName][permissionType].indexOf(role)!==-1;
      
}
    

// console.log(hasPermission("getUsers","trainer","write"));           //True
// console.log(hasPermission( "getUsers","trainer","write"));          //True
// console.log(hasPermission( "getUsers","trainer","read"));           //True
// console.log(hasPermission( "getUsers","trainee","write"));          //False
// console.log(hasPermission( "getUsers","head-trainer","write"));     //True
