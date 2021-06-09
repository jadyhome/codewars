////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5507309481b8bd3b7e001638/train/javascript

// Create a function which checks a number for three different properties.
// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array.
// Remark: The Haskell variant uses data Property.

// Examples
// numberProperty(7)  // ==> [true,  false, false]
// numberProperty(10) // ==> [false, true,  true]
// The number will always be an integer, either positive or negative.
// Note that negative numbers cannot be primes, but they can be multiples of 10:

// numberProperty(-7)  // ==> [false, false, false]
// numberProperty(-10) // ==> [false, true,  true]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

let primeNum = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

let evenNum = (n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

let multipleOfTen = (n) => {
  if (n % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

function numberProperty(n) {
  return [primeNum(n), evenNum(n), multipleOfTen(n)];
}

/////// SOLUTION ///////
