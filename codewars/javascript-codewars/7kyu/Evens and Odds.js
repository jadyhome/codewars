////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/583ade15666df5a64e000058/train/javascript

// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function evensAndOdds(num) {
  if (num % 2 === 0) {
    return num.toString(2);
  } else {
    return num.toString(16);
  }
}

/////// SOLUTION ///////
