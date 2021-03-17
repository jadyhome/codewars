////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57fb79784e2d0639c9000066/train/javascript

// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order
// and the even numbers are sorted in descending order after the last odd number.
// For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2].
// If the array contains decimals, round them down while checking for odd/even.
// The output must have the original numbers!

// If there are no issues with the kata and you successfully completed it, please rank and upvote!

////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sortItOut(array) {
  let evens = array.filter((e) => Math.floor(e) % 2 === 0)
  // using filter() method, we filter out just even numbers
  // using Math.floor() to round the number down while we are checking for even numbers

  let odds = array.filter((o) => Math.floor(o) % 2 !== 0)
  // using filter() method, we filter out just odd numbers
  // using Math.floor() to round the number down while we are checking for odd numbers  

  evens = evens.sort((a, b) => b - a) // using sort() method to sort even numbers by descending order
  odds = odds.sort((c, d) => c - d) // using sort() method to sort odd numbers by ascending order

  return odds.concat(evens)
  // returning a joined single array
  // using concat() method to join the two arrays together
  // odd numbers first then even numbers
}

/////// SOLUTION ///////
