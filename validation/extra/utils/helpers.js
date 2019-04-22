let pattern = new RegExp (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

export default function validateEmail (trainee , reviewer) {
  console.log(pattern.test(trainee));
  console.log(pattern.test(reviewer));
}