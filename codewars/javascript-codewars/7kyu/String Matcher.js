////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/train/javascript

// isMatching checks if a string can be created by combining and
// rearranging the letters of two other strings (not case sensitive).

// !Spaces will be ignored but special characters and numbers won't match the string and return false.

// For example:
// isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false

// You need to be able to use all the caracters from the two strings so:
// isMatching("kata", "kt", "aaa") return false
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function isMatching(string, str1, str2) {
  let string1 = string
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLowerCase()
    .trim();
  let string2 = (str1 + str2)
    .split("")
    .sort((c, d) => c.localeCompare(d))
    .join("")
    .toLowerCase()
    .trim();

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
