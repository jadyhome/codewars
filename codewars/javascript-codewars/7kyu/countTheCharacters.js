////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/577ad961ae2807182f000c29/train/javascript

// The goal of this kata is to write a function that takes two inputs: a string and a character.
// The function will count the number of times that character appears in the string.
// The count is case insensitive.

// For example:

// countChar("fizzbuzz","z") => 4
// countChar("Fancy fifth fly aloof","f") => 5
// The character can be any alphanumeric character.

// Good luck.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function countChar(string, char) {
  let count = 0 // initializing new variable 'count' to keep count of the characters that will appear in the string

  // using a for loop, we loop through the length of the string, and increment as we iterate through the string
  for (let i = 0; i < string.length; i++) {
    // using toLowerCase() method for the 'string' and 'char' inputs to make the search case insensitive
    // using charAt(), we search if the 'i' element in 'string' input equals to the 'char' input
    if (string.toLowerCase().charAt(i) === char.toLowerCase()) {
      count += 1 // we increment the count by 1, if 'char' occurs in 'string'
    }
  }
  return count // return the 'count' variable
}

/////// SOLUTION ///////
