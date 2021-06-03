////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.
// E.g: Hello World -> hELLO wORLD
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function alternateCase(s) {
  s = s.split("");
  let alternated = s
    .map((x) => (x !== x.toUpperCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");

  return alternated;
}

/////// SOLUTION ///////
