////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

// An ordered sequence of numbers from 1 to N is given.
// One number might have deleted from it, then the remaining numbers were mixed.
// Find the number that was deleted.

// Example:
// The starting array sequence is [1,2,3,4,5,6,7,8,9]

// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]

// Your function should return the int 5.

// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function findDeletedNumber(arr, mixArr) {
  let missingNum = arr.filter((x) => !mixArr.includes(x))
  // creating a new variable - 'missingNum'
  // using the filter() method with the starting array 'arr'
  // comparing it with the 'mixArr'
  // if the mixArr does not include 'x' value from the starting array
  // we filter out the integer from the 'arr' that was not included in the 'mixArr'

  if (missingNum === 0) { // if no number from the array was deleted and there is no difference in both arrays
    return 0 // we return 0
  } else {
    return Number(missingNum) // else, we return the deleted number as an integer
  }
}

/////// SOLUTION ///////
