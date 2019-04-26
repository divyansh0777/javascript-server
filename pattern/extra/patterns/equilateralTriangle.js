
// let a = process.argv[2];

export default function equilateralTriangle (value) {
  for (let i = 1; i <= value; i++) {
    let result = "";

    for (let j = 1; j <=value-i; j++ ) {
      result = result + " ";
    }

    for (let k = 1; k <= i; k++) {
      result = result + "* ";
    }

    console.log(result);
  }
}

// triangle (a);
