////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

// Write a method that takes one argument as name
// and then greets that name, capitalized and ends with an exclamation point.

// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const greet = function (name) {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  // using charAt() method - returns the character at a specific index, in this case, at the index of 0
  // because we want the first character to be capitalized, so we use the toUpperCase() method

  // using slice() method to extract a certain section of a string
  // we extract (or slice) the string starting from the index of 1
  // returning it into a new string, without modifying the original

  return `Hello ${name}!` 
  // returning a string using template literal that calls the name variable 
}

/////// SOLUTION ///////
