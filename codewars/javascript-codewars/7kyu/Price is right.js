////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5af0a5fc783bb49e9500007d/train/javascript

// Given an array of integers, and a target integer,
// return the largest integer from the array that is less than or equal to the target.

// If there is no number that is less than or equal to the target number then return undefined.

// The array of integers may be empty, but will always be an array.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function priceIsRight(numbers, target) {
  numbers = numbers.filter((n) => n <= target).sort((a, b) => b - a);
  return numbers[0];
}

/////// SOLUTION ///////
