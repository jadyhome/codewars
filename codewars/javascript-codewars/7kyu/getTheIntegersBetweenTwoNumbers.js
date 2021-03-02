////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript

// Build a function that can get all the integers between two given numbers.

// Example:
// (2,9)

// Should give you this output back:
// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function range(startNum, endNum) {
  let numbers = [] // initialize empty array so that we can push numbers into later

  // using a for loop:
  // set temporary variable 'i' to start at the value after startNum ( by adding 1 to startNum )
  // and as long as the value of 'i' is less than endNum, we increment 'i'
  // the for loop will end when 'i' equals endNum
  for (let i = startNum + 1; i < endNum; i++) {
    numbers.push(i) // we push 'i' into the numbers array we initialized in the beginning
  }
  return numbers // returning the array of integers between startNum and endNum
}

/////// SOLUTION ///////
