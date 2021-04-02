////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript

// Your task is to write a function, which takes two arguments and returns a sequence.
// First argument is a sequence of values, second is multiplier.
// The function should filter all non-numeric values and multiply the rest by given multiplier.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function multiplyAndFilter(array, multiplier) {
  let nums = array.filter((n) => typeof n === "number");
  return nums.map((m) => m * multiplier);
}

/////// SOLUTION ///////
