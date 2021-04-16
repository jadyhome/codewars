////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5866ec8b2e8d9cec7e0000bb/train/javascript

// All Star Code Challenge #29

// Your friend Nhoj has dislexia, but can easily read messages if the words are written backwards.
// Create a function called reverseSentence()/reverse_sentence() that accepts a string argument.
// The function returns a string of the same length with each word reversed, but still in their original order.

// reverseSentence("Hello !Nhoj Want to have lunch?"); // => 'olleH johN! tnaW ot evah ?hcnul'

// Note:
// A "word" should be considered a string split by a space character, " " Letter capitalization should be maintained.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function reverseSentence(str) {
  let backwards = str.split("").reverse().join("");
  let backwards2 = backwards.split(" ").reverse().join(" ");

  return backwards2;
}

/////// SOLUTION ///////
