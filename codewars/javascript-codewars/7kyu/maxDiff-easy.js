////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

// You must implement a function that return the difference between the biggest
// and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// maxDiff([1, 2, 3, 4]); // return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); // return 7, because 3 - (-4) == 7
// Have fun!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function maxDiff(list) {
  let max = Math.max(...list) // using Math.max() to return the maximum value in the list
  let min = Math.min(...list) // using Math.min() to return the minimum value in the list

   // if the list is empty or contains one integer
  if (list.length === 0 || list.length === 1) {
    return 0 // we return 0
  } else {
    return max - min // else we return the difference from max and min
  }
}

/////// SOLUTION ///////
