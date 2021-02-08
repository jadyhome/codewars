////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function removeChar(str) {
  let firstChar = str.substring(1);
  let lastChar = firstChar.slice(0, -1);
  let newText = lastChar;

  return newText;
}

/////// SOLUTION ///////
