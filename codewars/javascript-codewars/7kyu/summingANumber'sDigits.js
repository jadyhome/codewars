////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

// Write a function named sumDigits which takes a number as input
// and returns the sum of the absolute value of each of the number's decimal digits.

// For example:

// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

// Let's assume that all numbers in the input will be integer values.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumDigits(number) {
  let numberToString = number.toString().split("")
  // creating a new variable - 'numberToString'
  // we turn the number into a string, using the toString() method
  // then we split the string into separate individual strings, using the split() method

  let numberArray = numberToString.map(Number)
  // creating another new variable - 'numberArray'
  // we map through the array, using the map() method
  // and turning the strings into individual integers -- with Number

  numberArray = numberArray.filter((x) => !Number.isNaN(x))
  // with the 'numberArray', we filter out any element from the array if it is NaN
  // using the filter() method and using the Number.isNaN() method

  return numberArray.reduce((a, b) => a + b) 
  // returning the sum of all the integers in the 'numberArray', using the reduce() method
}

/////// SOLUTION ///////
