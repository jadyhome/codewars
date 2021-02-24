////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5966ffb962d030e11a00005a/train/javascript

// Create a function that takes 2 arrays of 5 string numbers each,
// and outputs the sum of the corresponding elements as strings as well.

// sumArr(['4','5','6','7','8'],['1','2','3','4','5']) // => ['5','7','9','11','13']
// sumArr(['34','5','200','17','6'],['27','24','14','90','16']) // => ['61','29','214','107','22']
// If any input is an empty string, it should return the number that isn't just an empty string.
// If both corresponding elements are empty, output "0".

// HINT: Remember Number()/parseInt() from https://www.codewars.com/kata/5966e33c4e686b508700002d
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumArr(a, b) {
  let sums = 0 // initializing a variable for the sum of both arrays
  let numbers = [] // initializing an empty array so that we can push the sums into this array

  // using map() method to map through the arrays and change it from strings into integers
  a = a.map(Number)
  b = b.map(Number)

  for (i = 0; i < a.length; i++) { // iterating through the 'a' array with a for loop
    sums = a[i] + b[i] 
    // taking the sums variable we initialized in the beginning
    // and adding the value of each iteration from 'a' array and 'b' array together
    numbers.push(sums) // pushing the sums into the empty numbers array
  }

  // now that the numbers array have the sums of both array a & b
  // we map through the numbers array and change it from integers back to strings
  numbers = numbers.map(String)
  return numbers // returning the array of strings
}

/////// SOLUTION ///////
