////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, 
// and we need those phone numbers to annoy them with endless sales calls!

// The Format
// Phone numbers are stored as strings and comprised of 11 digits, 
// eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain 
// lots of random characters, whitespace and some are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' 
// and there are lots more lines that we need to check.

// The Task
// Given a string, you must decide whether or not it contains a valid phone number. 
// If it does, return the corrected phone number as a string 
// ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function isItANum(str) {
  let number = str.replace(/[^0-9]/g, "")
  // using the replace() method, making a global search 
  // where it will replace everything in the string that is not a number with ""

  if (number.length === 11) { return number } 
  // if the length of the string is 11, return the phone number as a string

  if (number.length > 11) { return "Not a phone number" }
  // if the length of the string is less than 11, return a string - "Not a phone number"

  if (number.charAt(0) !== 0) { return "Not a phone number" }
  // if the string's character at 0 index is not 0, return a string - "Not a phone number"
}

/////// SOLUTION ///////
