////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string.
// For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
// the sum of the integers is 3635.

// Note: only positive integers will be tested.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumOfIntegersInString(s) {
  if (!s.match(/\d+/g)) { // if 's' does not match any of the digits (using match() method and regex)
    return 0 // we return 0
  }

  let nums = s.match(/\d+/g).map((n) => Number(n))
  // creating a new variable 'nums'
  // using match() method and regex, if the string contains any digits
  // we use the map() method and map through the array and turn the strings into integers

  let sums = nums.reduce((a, b) => a + b, 0)
  // creating a new variable 'sums'
  // using reduce() method, we add all the integers together
  // with an initial value of 0, to avoid when the array is empty 

  return sums // returning the sums varible
}

/////// SOLUTION ///////
