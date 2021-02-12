////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

// Complete the function that takes a list of numbers (nums), as the only argument to the function.
// Take each number in the list and square it if it is even, or square root the number if it is odd.
// Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const sumSquareEvenRootOdd = (ns) => {
  let even = ns.filter((e) => e % 2 === 0)
  // filtering out the numbers in the array where the remainder equals 0; returning just even numbers
  // returns an array of all even numbers using the .filter() method

  let odd = ns.filter((o) => o % 2 !== 0)
  // filtering out the numbers in the array where the remainder does not equal to 0; returning just odd numbers
  // returns an array of all odd numbers using the .filter() method

  let sq = even.map((s) => Math.pow(s, 2))
  // maps through the even numbers array, and squares each number
  // returns an array of the squared even numbers using the .map() and Math.pow() methods
  
  let sqroot = odd.map((sr) => Math.sqrt(sr))
  // maps through the odd numbers array, and square roots each number
  // returns an array of the square roots of the odd numbers using the .map() and Math.sqrt() methods

  let sqAndSqrt = sq.concat(sqroot)
  // returns a concatenated or joined array of both the squared even numbers and square rooted odd numbers
  // using the .concat() method

  let totalSum = sqAndSqrt.reduce((x, y) => x + y, 0).toFixed(2)
  // returns the sum of the array and rounded to 2 decimal places
  // using the .reduce() method and .toFixed() method

  return Number(totalSum) // returns the "totalSum" into a Number
};

/////// SOLUTION ///////
