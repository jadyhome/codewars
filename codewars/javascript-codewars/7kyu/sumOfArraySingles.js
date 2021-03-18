////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once,
// and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function repeats(arr) {
  arr = arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
  // filter() method to filter out the integers where they only occur once in the array
  // using indexOf() and lastIndexOf() method
  // filters out just the element where both the first index and last index are the same

  return arr.reduce((a, b) => a + b);
  // returning the sum of the single occuring integers
  // using reduce() method, to add the integers in the array together
}

/////// SOLUTION ///////
