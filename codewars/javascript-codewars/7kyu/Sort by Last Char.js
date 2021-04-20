////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

// Given a string of words (x), you need to return an array of the words,
// sorted alphabetically by the final character in each.

// If two words have the same last letter,
// they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function last(x) {
  x = x.split(" ");

  let sorted = x.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
  return sorted;
}

/////// SOLUTION ///////
