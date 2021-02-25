////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript

// You will be given an array which will include both integers and characters.

// Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number.
// There will always be 10 integers and 10 characters.
// Create a single string with the characters and return it as a[1] while maintaining the original order.

// lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

// Here is an example of your return
// [3.6, "udiwstagwo"]

// In C# and Java the mean return is a double.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function mean(lst) {
  let nums = lst.filter((a) => a.match(/[0-9]/g))
  // filter() method to filter out a new array of just numbers
  // using match() method and regex 
  // set of a range of [0-9] - will match any digit within the brackets
  // using the 'g' flag for global search

  nums = nums.map((n) => parseFloat(n))
  // map() method to map through the nums array, and changing the strings into integers
  // this kata wants the integers as a floating point number, so we use parseFloat()

  let mean = nums.reduce((x, y) => x + y) / 10
  // reduce() method to add all the integers together
  // and dividing it by 10, because there will always be 10 integers - to get the mean

  let letters = lst.filter((b) => b.match(/[a-z]/g))
  // filter() method to filter out a new array of just letters
  // using match() method and regex
  // set of a range of [a-z] - will match any character within the brackets
  // using the 'g' flag for global search

  letters = letters.join("")
  // join() method to join the letters into a single string

  return [mean, letters] 
  // returning the answer - [mean is at index of 0, letters is at index of 1]
}

/////// SOLUTION ///////
