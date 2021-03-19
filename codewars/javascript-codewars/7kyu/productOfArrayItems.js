////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5901f361927288d961000013/train/javascript

// Calculate the product of all elements in an array.
// If the array is null or is empty, the function should return null.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */

function product(values) {
  if (values === null) { // if values equals to null
    return null; // we return null
  } else if (values.length === 0) { // else if the length of the array equals to 0 / empty
    return null; // we return null as well
  } else {
    return values.reduce((a, b) => a * b, 1); 
    // else we return the product of all the elements in the array
    // using reduce() method
    // with the initial value set to 1 or else our function will return 0 no matter what
  }
}

/////// SOLUTION ///////
