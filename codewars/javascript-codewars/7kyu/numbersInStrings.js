////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

// In this Kata, you will be given a string that has lowercase letters and numbers.
// Your task is to compare the number groupings and return the largest number.
// Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function solve(s) {
  const nums = s.match(/\d+/g)
  // using the string.match() method and regex
  // \d : is the same as [0-9], each will match any number (digit)
  // adding + to \d
  // \d+ : matches the preceding expression 1 or more times
  // g -- for global search, so it searches for all the numbers in the string

  return Math.max(...nums)
  // using the spread syntax, we pass in all the values found
  // returns the largest valued number
}

/////// SOLUTION ///////
