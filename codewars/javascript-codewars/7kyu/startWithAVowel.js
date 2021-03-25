////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript

// Create a function that takes any sentence and redistributes the spaces
// (and adds additional spaces if needed) so that each word starts with a vowel.
// The letters should all be in the same order but every vowel in the sentence should be the start of a new word.
// The first word in the new sentence may start without a vowel.
// It should return a string in all lowercase with no punctuation (only alphanumeric characters).

// EXAMPLES
// 'It is beautiful weather today!' becomes 'it isb e a ut if ulw e ath ert od ay'
// 'Coding is great' becomes 'c od ing isgr e at'
// 'my number is 0208-533-2325' becomes 'myn umb er is02085332325'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function vowelStart(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // replace() method to replace anything within the string that isn't letters or numbers with an empty string
  // toLowerCase() method to change the string to all lowercase

  return str.replace(/([aeiou])/g, " $1").trim();
  // replace() method to put a whitespace --> " $1" before every vowel using the [aeiou] regex set
  // $1 --- if it matches the regex set, aeiou, it will add a space before the vowel
  // trim() method to removes whitespace from both sides of a string
}

/////// SOLUTION ///////
