////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

// Don't give me five!
// In this kata you get the start number and the end number of a region
// and should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!

// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it.
// Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function dontGiveMeFive(start, end) {
  let nums = [] // initialize empty array so that we can push into later

  // using a for loop:
  // set temporary variable 'i' to start at the value of 'start'
  // and as long as the value of 'i' is less than or equal to 'end', we increment 'i'
  // the for loop will end when 'i' equals 'end'
  for (let i = start; i <= end; i++) {
    if (!String(i).includes("5")) { 
    // we use String() to turn the integers into strings, and if the strings does not include '5'
      nums.push(i) // we push 'i' into the nums array we initialized in the beginning
    }
  }
  return nums.length // returning the length of the array
}

/////// SOLUTION ///////
