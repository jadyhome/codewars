////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9/train/javascript

// Sort the given array of strings in alphabetical order, case insensitive.
//For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function (names) {
  return names.sort((a, b) => a.localeCompare(b.toLowerCase()));
};

/////// SOLUTION ///////
