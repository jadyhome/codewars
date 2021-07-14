////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/585de79128bc74912d0001c5/train/javascript

// You are given a string of numbers between 0-9.
// Find the average of these numbers and return it as a floored whole number
// (ie: no decimal places) written out as a string.

// Eg:
// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function averageString(str) {
  let nums = {
    "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
    "six": 6, "seven": 7, "eight": 8, "nine": 9, "zero": 0,
  };

  let numbers = str.split(" ").map((a) => (a = nums[a]));
  let avg = Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);

  if (avg === 1) { return "one" };
  if (avg === 2) { return "two" };
  if (avg === 3) { return "three" };
  if (avg === 4) { return "four" };
  if (avg === 5) { return "five" };
  if (avg === 6) { return "six" };
  if (avg === 7) { return "seven" };
  if (avg === 8) { return "eight" };
  if (avg === 9) { return "nine" };
  if (avg === 0) { return "zero" };
  if (str === "" || numbers.includes(undefined)) { return "n/a" };
}

/////// SOLUTION ///////
