////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/train/javascript

// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function findMissingNumbers(arr) {
  let min = Math.min(...arr); // getting the minimum value from the 'arr' input
  let max = Math.max(...arr); // getting the maximum value from the 'arr' input
  let allNums = []; // initiating an empty array called 'allNums'

  // for loop to loop through the 'min' value and 'max' value
  // letting 'i' equal the value of the minimum value of the 'arr'
  // and if 'i' is less than or equal to the maximum value of the 'arr'
  // we iterate through the numbers and stop the loop when it reaches the maximum value
  for (let i = min; i <= max; i++) {
    allNums.push(i); // we push all the numbers into the 'allNums' empty array
  }
  // using filter() method, we filter out from the 'allNums' array
  // comparing it with the original array input 'arr'
  // using indexOf() method; returns the first index at which a given element can be found in the array, 
  // or -1 if it is not present
  return allNums.filter((x) => arr.indexOf(x) === -1);
  // and we return the array of missing numbers
}

/////// SOLUTION ///////
