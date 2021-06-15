////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

// Basic regex tasks. Write a function that takes in a numeric code of any length.
// The function should check if the code begins with 1, 2, or 3 and return true if so.
// Return false otherwise.

// You can assume the input will always be a number.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function validateCode(code) {
  code = code.toString();

  if (code.charAt(0).match(/[123]/g)) {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
