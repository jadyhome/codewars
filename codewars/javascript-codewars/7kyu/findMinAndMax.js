////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript

// Implement a function that returns the minimal and the maximal value of a list (in this order).
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function getMinMax(arr) {
  const min = Math.min(...arr)
  // using the Math.min() method to return the minimum value in the array

  const max = Math.max(...arr)
  // using the Math.max() method to return the maximum value in the array

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // Spread syntax can be used when all elements from an object 
  // or array need to be included in a list of some kind.

  return [min, max] // returning in the format of [min, max]
}

/////// SOLUTION ///////
