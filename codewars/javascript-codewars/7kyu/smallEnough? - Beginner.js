////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

// You will be given an array and a limit value.
// You must check that all values in the array are below or equal to the limit value.
// If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function smallEnough(a, limit) {
  // every() method -- tests whether all elements in the array pass the test implemented by the provided function
  // if the elements in the array are all less than or equal to the limit input
  if (a.every((x) => x <= limit)) {
    return true; // we return true
  } else {
    return false; // else, if the elements in the array have values higher than the limit input, we return false
  }
}

/////// SOLUTION ///////
