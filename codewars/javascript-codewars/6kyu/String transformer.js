////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function stringTransformer(str) {
  str = str.split("");
  let transformedStr = [];

  for (let s = 0; s < str.length; s++) {
    if (str[s] === str[s].toLowerCase()) {
      transformedStr.push(str[s].toUpperCase());
    } else if (str[s] === str[s].toUpperCase()) {
      transformedStr.push(str[s].toLowerCase());
    } else {
      transformedStr.push(str[s]);
    }
  }

  return transformedStr.join("").split(" ").reverse().join(" ");
}

/////// SOLUTION ///////
