////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// A square of squares
// You like building blocks.
// You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square.
// Instead, you end up with an ordinary rectangle! Those blasted things!
// If you just had a way to know, whether you're currently working in vain…
// Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const isSquare = function (n) {
  let num = Math.sqrt(n)
  // creating a new variable 'num'
  // using the Math.sqrt() method, we square root 'n'

  if (num < 0) {
    return false
    // if 'num' is less than 0, meaning any negative numbers, will return false
  } else if (!Number.isInteger(num)) {
    return false
    // using the Number.isInteger() method to check the 'num' if value is integer or not
    // it would return false if the 'num' value is not a whole number
  } else {
    return Number.isInteger(num)
    // else we return the 'num' value if it is a whole number that is also a square number
  }
}

/////// SOLUTION ///////
