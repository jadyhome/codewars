////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59e8afdd0863c7bcb300013a/train/javascript

// You're given two integers – n and k.
// n is always positive, while k >= 0.
// Write a function that returns first k odd digits in a number n.

// The output should also be an integer.
// In the following cases a function should return 0:

// there are no odd digits in a number n;
// k is bigger than a number of digits in n;
// k = 0;
// k is bigger than a number of odd digits in n.
// BTW, is 0 an odd number or an even one?
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function findOddDigits(n, k) {
  n = n
    .toString()
    .split("")
    .filter((odd) => odd % 2 !== 0);

  if (n.length < k) {
    return 0;
  } else {
    return Number(n.slice(0, k).join(""));
  }
}

/////// SOLUTION ///////
