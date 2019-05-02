import { IDiamond } from '../interfaces'

let diamond: IDiamond;

diamond = (value) => {
  for (let i = 1; i <= value ; i++) {
    let result = "";

    for (let j = 1; j <= value-i; j++) {
      result = result + " ";
    }

    for (let k = 1; k <= i; k++) {
      result = result + "* ";
    }

    console.log(result);
  }

  for (let i = value; i >= 1; i--) {
    let res = "";

    for (let j = 1; j <= value-i; j++) {
      res = res + " ";
    }

    for (let k = 1; k <= i; k++) {
      res = res + "* ";
    }

    console.log(res);
  }
}

export { diamond };
