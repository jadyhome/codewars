////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript

// Given two words and a letter, return a single word that's a combination of both words,
// merged at the point where the given letter first appears in each word.
// The returned word should have the beginning of the first word and the ending of the second,
// with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// StringMerge("hello", "world", "l")       ==>  "held"
// StringMerge("coding", "anywhere", "n")   ==>  "codinywhere"
// StringMerge("jason", "samson", "s")      ==>  "jasamson"
// StringMerge("wonderful", "people", "e")  ==>  "wondeople"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function stringMerge(string1, string2, letter) {
  let start = string1.indexOf(letter);
  let end = string2.indexOf(letter);

  return string1.slice(0, start) + string2.slice(end);
}

/////// SOLUTION ///////
