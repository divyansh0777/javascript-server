import { diamond, equilateralTriangle } from './pattern';
import * as constants from './constants';
import { hasPermission } from './utils';
import { validateUsers } from './validation';

//Patterns Importing from patterns
console.log("***********Triangle Patterns************\n");

diamond(5);
equilateralTriangle(5);

console.log("*********Permission Testing*************\n");

//util
console.log(hasPermission("getUsers","trainer","write"));           //True
console.log(hasPermission( "getUsers","trainer","write"));          //True
console.log(hasPermission( "getUsers","trainer","read"));           //True
console.log(hasPermission( "getUsers","trainee","write"));          //False
console.log(hasPermission( "getUsers","head_trainer","write"));     //True

console.log("********Validating Users Emails*********\n");

//Validation
const users = [
  {
    [constants.TRAINEE_EMAIL]: 'trainee2@successive.tech@.tech', //FALSE
    [constants.REVIEWER_EMAIL]: 'reviewer2@successive.tech',
  },

  {
    [constants.TRAINEE_EMAIL]: 'trainee3@successive.tech@.tech', //FALSE
    [constants.REVIEWER_EMAIL]: 'reviewer3@successive.tech',
  },

  {
    [constants.TRAINEE_EMAIL]: 'trainee4@successive.tech',
    [constants.REVIEWER_EMAIL]: 'reviewer4@successive.tech',
  },

  {
    [constants.TRAINEE_EMAIL]: 'trainee5@successive.tech',
    [constants.REVIEWER_EMAIL]: 'reviewer5@successive@successive.tech', //FALSE
  }
]

validateUsers(users);
