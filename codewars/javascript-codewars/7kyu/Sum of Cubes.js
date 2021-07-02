////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

// Write a function that takes a positive integer n,
// sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples:
// sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumCubes(n) {
  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i * i * i);
  }
  return nums.reduce((a, b) => a + b);
}

/////// SOLUTION ///////
