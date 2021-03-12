////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number.
// You are not allowed to use any loops (including for, for/in, while, and do/while loops).
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function average(scores) {
  let sum = scores.reduce((a, b) => a + b) // using reduce() method, we add the array of integers together
  let avg = sum / scores.length // we divide the sum and the length of the array

  return Math.round(avg) // returning the avg, rounded to the nearest whole number with Math.round()
}

/////// SOLUTION ///////
