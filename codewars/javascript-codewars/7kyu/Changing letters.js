////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript

// When provided with a String, capitalize all vowels

// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function swap(st) {
  return st.replace(/[aeiou]/g, (capital) => capital.toUpperCase());
}

/////// SOLUTION ///////
