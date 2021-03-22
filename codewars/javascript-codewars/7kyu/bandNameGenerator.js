////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript

// My friend wants a new band name for her band. She like bands that use the formula:
// "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter,
// she likes to repeat the noun twice and connect them together with the first and last letter,
// combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function bandNameGenerator(str) {
  // if the first character in the string equals to the last character of the string
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return `${str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1)}`;
    // first character is uppercased using the toUpperCase() method
    // using slice() method, we return a portion of the string, 
    // in this case, we return the portion where the first character is not included 
    // and then we combine the first capitalized character, with the sliced portions two times
    // using the example in the prompt: 'A' + 'laska' + 'laska' === 'Alaskalaska'
    // we return the string
  } else {
    // else, we return the band name where the word 'The' is included
    // and the first character of the 'str' is uppercased
    // combining it with the sliced portion of the string input
    return `The ${str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()}`;
  }
}

/////// SOLUTION ///////
