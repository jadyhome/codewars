////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5983cba828b2f1fd55000114/train/javascript

// Create a method that takes an array/list as an input,
// and outputs the index at which the sole odd number is located.

// This method should work with arrays with negative numbers.
// If there are no odd numbers in the array, then the method should output -1.

// Examples:

// oddOne([2,4,6,7,10]) // => 3
// oddOne([2,16,98,10,13,78]) // => 4
// oddOne([4,-8,98,-12,-7,90,100]) // => 4
// oddOne([2,4,6,8]) // => -1

////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function oddOne(arr) {
  let odd = arr.findIndex((o) => o % 2 === 1 || o % 2 === -1)
  // creating a new variable - 'odd'
  // using findIndex() method
  // we go through the array, and if there is an odd number within the array
  // whether it is a positive or negative odd number
  // we return the index of the odd number

  if (arr % 2 === 0) { // if the array only has even numbers
    return -1 // we return an output of -1
  } else {
    return odd // else, we return the odd variable
  }
}

/////// SOLUTION ///////
