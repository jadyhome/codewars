////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function reverseLetter(str) {
  const noSymbols = str.replace(/\W/gi, "")
  // using the regex replace() method, replacing all non-word characters from the string with an empty string

  const noUnderscore = noSymbols.replace(/_/g, "")
  // using the regex replace() method, replacing all underscores from the string with an empty string

  const noNumbers = noUnderscore.replace(/[0-9]/g, "")
  // using the regex replace() method, replaceing all numbers from the string with an empty string

  const reversedLetters = noNumbers.split("").reverse().join("")
  // using split() method to split the string and returns into an array
  // using the reverse() method, will reverse the array
  // using the join() method will the join the strings in the array back into a string

  return reversedLetters // returning the final answer
}

/////// SOLUTION ///////
