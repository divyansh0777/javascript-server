import {validateEmail} from './utils/validation'
import {users} from './utils/validation'
import * as constants from './constants'

let validateUsers = (users) => {
    console.log(users);
    users.forEach((key) => {
      console.log(key);
      let traineeEmail = constants.TRAINEE_EMAIL;
      let reviewerEmail = constants.REVIEWER_EMAIL;
      validateEmail(key.traineeEmail, key.reviewerEmail);
    })
  }

  validateUsers(users);