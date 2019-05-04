import { IValidateEmail } from '../interfaces';

export function validateUsers (users) {
  console.log(users);
  users.forEach((key) => {
    let newObj = {
      trainee : key.traineeEmail,
      reviewer : key.reviewerEmail
    };
    validateEmail(newObj);
  });
}

let pattern = new RegExp (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

let validateEmail = (Obj : IValidateEmail): void => {
  console.log(pattern.test(Obj.trainee))
  console.log(pattern.test(Obj.reviewer))
}


