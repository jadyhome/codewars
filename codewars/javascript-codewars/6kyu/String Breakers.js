////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59d398bb86a6fdf100000031

// I will give you an integer (N) and a string.
// Break the string up into as many substrings of N as you can without spaces.
// If there are leftover characters, include those as well.

// Example:

// N = 5;
// String = "This is an example string";

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function stringBreakers(n, string) {
  let newString = [];
  string = string.replace(/\s/g, "");

  for (let s = 0; s < string.length; s += n) {
    newString.push(string.slice(s, s + n));
  }

  return newString.join("\n");
}

/////// SOLUTION ///////
