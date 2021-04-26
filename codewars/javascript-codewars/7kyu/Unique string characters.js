////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

// In this Kata, you will be given two strings a and b
// and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.

// Notice also that you return the characters from the first string concatenated with those from the second string.
// More examples in the tests cases.

// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function solve(a, b) {
  let uniqueChars = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      uniqueChars.push(a[i]);
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (a.indexOf(b[j]) === -1) {
      uniqueChars.push(b[j]);
    }
  }

  return uniqueChars.join("");
}

/////// SOLUTION ///////
