////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function reverseWords(str) {
  str = str.split("")
  // using the split("") method
  // we split the string into individual strings by each letter, space, and period

  let reversed = str.reverse().join("")
  // using the reverse() method, we reverse the whole array
  // using the join() method, we join the whole array back together

  let splitAgain = reversed.split(" ")
  // using the split() method again, we split the string back into an array of strings
  // this time, we split the string into its own word strings 
  // split(" ") <-- notice the space in between the ""

  let reversedWords = splitAgain.reverse().join(" ")
  // using the reverse() method again, we reverse the whole array again
  // and using the join() method again, we join the array back together into a string
  // notice the space in between the "" -- join(" ") -- we want to have spaces in the string

  return reversedWords // returning the final string
}

/////// SOLUTION ///////
