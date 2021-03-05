////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

// Your task is to remove all duplicate words from a string,
// leaving only single (first) words entries.

// Example:

// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function removeDuplicateWords(s) {
  let wordArray = s.split(" ")
  // split() method to split the string into an array of individual words

  let removeExtras = wordArray.filter(
    (extra, index) => wordArray.indexOf(extra) === index
  )
  // using the filter() method to filter out the duplicate words
  // and include only elements where the indexes match their indexOf values

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // indexOf() method returns the first index at which a given element can be found in the array
  // the duplicate word is where its index in the array is different from its indexOf() value

  return removeExtras.join(" ")
  // returning the final array where all duplicate words are removed
  // and using the join() method to join the array back into a string, with proper spaces in between
}

/////// SOLUTION ///////
