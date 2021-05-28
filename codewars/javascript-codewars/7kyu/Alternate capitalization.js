////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.
// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function capitalize(s) {
  let evenIndex = "";
  let oddIndex = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenIndex += s[i].toUpperCase();
    } else {
      evenIndex += s[i].toLowerCase();
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      oddIndex += s[i].toUpperCase();
    } else {
      oddIndex += s[i].toLowerCase();
    }
  }

  return [evenIndex, oddIndex];
}

/////// SOLUTION ///////
