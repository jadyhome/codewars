////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function factorial(n) {
  let nums = 1;

  for (let i = 1; i <= n; i++) {
    nums *= i;
  }
  return nums;
}

/////// SOLUTION ///////
