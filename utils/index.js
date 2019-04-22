import {hasPermission} from './extra/util'

console.log(hasPermission("getUsers","trainer","write"));           //True
console.log(hasPermission( "getUsers","trainer","write"));          //True
console.log(hasPermission( "getUsers","trainer","read"));           //True
console.log(hasPermission( "getUsers","trainee","write"));          //False
console.log(hasPermission( "getUsers","head_trainer","write"));     //True
