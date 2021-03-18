////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

// Write a program that outputs the top n elements from a list.

// Example:
// largest(2, [7,6,5,4,3,2,1])
// => [6,7]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function largest(n, xs) {
  return xs // returning the function
    .sort((a, b) => b - a) // sort() method to sort the array from descending order
    .slice(0, n) // slice() method to return a portion of an array from index of 0 to index of 'n'
    .reverse() // reverse() method to reverse the array to ascending order
}

/////// SOLUTION ///////
