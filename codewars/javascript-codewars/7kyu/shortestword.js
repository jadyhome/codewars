////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function findShort(s) {
  const wordArray = s.split(" ");
  // using the split() method, we split the string into separate strings in the array.

  const shortestWord = wordArray.map((w) => w.length);
  // using the map() method, we map through the array of strings
  // and give us an array of all the length (integer values) of each string

  return Math.min(...shortestWord);
  // using the spread syntax, we pass in all the values in the array
  // returns the lowest valued number from the array
}

/////// SOLUTION ///////
