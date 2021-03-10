////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

// Complete the function that takes a sequence of numbers as single parameter.
// Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumEvenNumbers(input) {
  let even = input.filter((e) => e % 2 === 0) 
  // using the filter() method, we filter out an array with just even numbers

  let sumEvens = even.reduce((a, b) => a + b)
  // using the reduce() method, we add all the numbers in the array into one number

  return sumEvens // return sumEvens variable
}

/////// SOLUTION ///////
