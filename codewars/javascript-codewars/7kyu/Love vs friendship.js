////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function wordsToMarks(string) {
  string = string.split("");
  let alphabetValues = string.map((value) => value.charCodeAt() - 96);

  return alphabetValues.reduce((a, b) => a + b);
}

/////// SOLUTION ///////
