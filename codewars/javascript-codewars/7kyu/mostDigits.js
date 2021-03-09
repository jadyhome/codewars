////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function findLongest(array) {
  let sorted = array.sort((a, b) => b.toString().length - a.toString().length)
  // using the sort() method, we sort through the array from descending order
  // using the toString() method, we change the integers to strings
  // and we use .length to find the length of the strings

  return Number(sorted[0]) 
  // returning the first index of the sorted array
  // because we sorted the array from largest to smallest in length of string
  // and using the Number() function, we change the answer back into an integer
}

/////// SOLUTION ///////
