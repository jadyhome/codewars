////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5b6b128783d648c4c4000129/train/javascript

// Given an array of arrays, multiply the contents of each nested array and return the smallest total.

// Note: all inputs will be positive integers.

// Example: input [[1,5],[2]] output: 2
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function smallestProduct(arr) {
  arr = arr.map((x) => x.reduce((a, b) => a * b));
  return Math.min(...arr);
}

/////// SOLUTION ///////
