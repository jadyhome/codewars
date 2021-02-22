////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumTwoSmallestNumbers(numbers) {
  const sortedNums = numbers.sort((a, b) => a - b)
  // using the sort() method, we sort the numbers array from ascending order

  const sumOfLowNums = sortedNums[0] + sortedNums[1]
  // we take the sortedNums variable and add them together with only the first 2 index
  // in this case, the index of 0 and the index of 1

  return sumOfLowNums // return the variable where it is the sum of the 2 smallest number
}

/////// SOLUTION ///////
