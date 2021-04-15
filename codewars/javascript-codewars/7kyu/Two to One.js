////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function longest(s1, s2) {
  let string = s1.concat(s2);

  string = string.split("");

  let one = string.filter((v, i) => string.indexOf(v) === i);
  
  return one.sort().join("");
}

/////// SOLUTION ///////
