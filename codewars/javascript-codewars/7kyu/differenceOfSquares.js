////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

// Recreation of Project Euler problem #6

// Find the difference between the sum of the squares of the first n natural numbers
// (1 <= n <= 100) and the square of their sum.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:
// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:
// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers
// and the sum of the squares of those numbers is: 3025 - 385 = 2640
////////////////////////////////////////////////////////////////////////

/////// SOLUTION ///////

function differenceOfSquares(n) {
  let allNums = []; // initiate a new variable and assign it to an empty array
  for (let i = 1; i <= n; i++) { 
    // initiate a foor loop, starting with i = 1 and increment 'i' until 'i' is less than or equal to 'n'
    allNums.push(i); // push all incremented numbers into the empty array we initiated at the beginning
  }

  let sum = allNums.reduce((a, b) => a + b); 
  // creating a new variable called 'sum'
  // using the reduce() method to add all the numbers in the 'allNums' array together
  
  let sqOfSums = Math.pow(sum, 2); 
  // Math.pow() method to square the 'sum' variable

  let squaredNums = allNums.map((n) => Math.pow(n, 2)); 
  // map() method to map through the 'allNums' array and square all the numbers in the array by 2
  
  let sumOfSqs = squaredNums.reduce((c, d) => c + d);
  // reduce() method to add all the squared numbers together in the 'squareNums' array

  return sqOfSums - sumOfSqs; // returning the final number by subtracting 'sqOfSums' and 'sumOfSqs'
}

/////// SOLUTION ///////
