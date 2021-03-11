////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

// Given a mixed array of number and string representations of integers,
// add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function divCon(x) {
  let integers = x.filter((i) => typeof i === "number");
  // using filter() method and typeof, to filter out a new array with just the integers

  let strings = x.filter((s) => typeof s === "string");
  // using filter() method and typeof , to filter out a new array with just the strings

  strings = strings.map(Number);
  // map() method to map through the strings array and changing the strings into integers with Number

  let sumOfIntegers = integers.reduce((a, b) => a + b, 0);
  // using reduce() method, we add all the integers together to get the sum of all the integers array
  // with an initial value of 0, to avoid when the array is empty

  let sumOfStrings = strings.reduce((c, d) => c + d, 0);
  // using reduce() method, we add all the integers together to get the sum of all the strings turned integers array
  // with an initial value of 0, to avoid when the array is empty

  return sumOfIntegers - sumOfStrings; // return the difference of 'sumOfIntegers' and 'sumOfStrings'
}

/////// SOLUTION ///////
