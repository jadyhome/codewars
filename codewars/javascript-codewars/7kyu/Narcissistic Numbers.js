////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number.
// If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool)
// which returns whether or not i is a Narcissistic Number.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function isNarcissistic(n) {
  let length = n.toString().length;
  let narcNum = n
    .toString()
    .split("")
    .map((d) => Math.pow(d, length))
    .reduce((a, b) => a + b);

  if (narcNum === n) {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
