////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57193a349906afdf67000f50/train/javascript

// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.
// Write a function magic_sum which accepts an array of integers and returns the sum.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If the sum cannot be calculated, 0 should be returned.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function magicSum(numbers) {
  if (!Array.isArray(numbers)) {
    return 0;
  }

  let threes = numbers.filter((t) => t.toString().match(/[3]/g));
  let odd = threes.filter((o) => o % 2 !== 0);

  return odd.reduce((a, b) => a + b, 0);
}

/////// SOLUTION ///////
