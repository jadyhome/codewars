////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.
////////////////////////////////////////////////////////////////////////

/////// SOLUTION ///////

function largestPairSum(numbers) {
  let sorted = numbers.sort((a, b) => b - a)
  // using the sort() method, we sort the numbers array in descending order
  // the sorted array gives us the numbers from largest to smallest

  return sorted[0] + sorted[1]
  // returning the sorted variable and adding them together with only the first 2 index
  // because it is in descending order, the first 2 numbers are the largest pair of numbers
}

/////// SOLUTION ///////
