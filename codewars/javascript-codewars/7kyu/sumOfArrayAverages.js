////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

// Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:

// sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);
// First, determine the average of each array. Then, return the sum of all the averages.

// All numbers will be less than 100 and greater than -100.
// arr will contain a maximum of 50 arrays.
// After calculating all the averages, add them all together, then round down, as shown in the example below:

// The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

// Calculate the average of each individual array:
// [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
// [21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2

// Add the average of each array together:
// 3 + 41.2 = 44.2

// Round the final average down:
// Math.floor(44.2) = 44
// import math
// math.floor(44.2) = 44
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const sumAverage = (arr) => {
  arr = arr.map((nums) => nums.reduce((a, b) => a + b / nums.length, 0));
  // map() method to iterate through the array
  // and using the reduce() method - we add the numbers in each array
  // and get the average of each array by dividing it by the length
  // with an initial value of 0, to avoid when the array is empty 

  let sum = arr.reduce((x, y) => x + y);
  // reduce() method, we add the average of each array together

  return Math.floor(sum); // returning the final average by using Math.floor() to round down the integer
};

/////// SOLUTION ///////
