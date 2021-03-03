////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space,
// and highest number is first.

////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function highAndLow(numbers) {
  numbers = numbers.split(" ")
  // using the split() method, we split the string "numbers"
  // and return an array of strings of the numbers

  let maxNum = Math.max(...numbers) 
  // using the Math.max() method to return the maximum value in the array
  // using the spread syntax, we pass in all the values found

  let minNum = Math.min(...numbers)
  // using the Math.min() method to return the minimum value in the array
  // using the spread syntax, we pass in all the values found

  return `${maxNum} ${minNum}`
  // returning a string using template literal that calls the maxNum and minNum variable 
}

/////// SOLUTION ///////
