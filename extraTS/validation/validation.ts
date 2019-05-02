import * as constants from '../constants';
import { IvalidateEmailInterface } from '../interfaces';

export function validateUsers (users) {
  console.log(users);
  users.forEach((key) => {
    let traineeEmail = constants.TRAINEE_EMAIL;
    let reviewerEmail = constants.REVIEWER_EMAIL;
    let newObj = {
      trainee : key.traineeEmail,
      reviewer : key.reviewerEmail
    };
    validateEmail(newObj);
  });
}

let pattern = new RegExp (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

function validateEmail (Obj : IvalidateEmailInterface): void {
  console.log(pattern.test(Obj.trainee))
  console.log(pattern.test(Obj.reviewer))
}


