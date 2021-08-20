// THIS IS INCOMPLETE

////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/60a54750138eac0031eb98e1/train/javascript

//
////////////////////////////////////////////////////////////////////////

/////// SOLUTION ///////

const checkVin = (vin) => {
  const converting = {
    "A": "1", "B": "2", "C": "3", "D": "4", "E": "5", "F": "6", "G": "7", "H": "8", 
    "J": "1", "K": "2", "L": "3", "M": "4", "N": "5",
    "P": "7",
    "R": "9", "S": "2", "T": "3", "U": "4", "V": "5",
    "W": "6", "X": "7", "Y": "8", "Z": "9"
  };
  let weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  let numbers = [];
  vin = vin.split("");

  for (let i = 0; i < vin.length; i++) {
    if (vin[i].match(/[0-9]/g)) {
      numbers.push(vin[i]);
    }
    if (vin[i].match(/[a-z]/gi)) {
      numbers.push(converting[vin[i]]);
    }
  }

  numbers = numbers.map((n) => Number(n));

  // multiplying the numbers and the weights together
  let products = [];

  for (let m = 0; m < Math.min(numbers.length, weights.length); m++) {
    products[m] = numbers[m] * weights[m];
  }

  // all the products added together
  products = products.reduce((a, b) => a + b);

  // modulus of the sum taken
  let mod = products % 11;
  console.log("mod:", mod);

  // Checking the 9th character
  //   let ninth =
  console.log("9th:", vin.join("").charAt(9));
};

/////// SOLUTION ///////
