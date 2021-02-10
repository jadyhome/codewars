////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/599c20626bd8795ce900001d/train/javascript

// Write a function that takes a string which has integers inside it separated by spaces,
// and your task is to convert each integer in the string into an integer and return their sum.

// Example
// summy("1 2 3")  ==> 6

// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function summy(stringOfInts) {
  const splitString = stringOfInts.split(" ")
  const intoArray = splitString.map(Number)
  const sum = intoArray.reduce((a, b) => a + b, 0)

  return sum
}

/////// SOLUTION ///////
