////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5865a75da5f19147370000c7/train/javascript

// This Kata is intended as a small challenge for my students
// All Star Code Challenge #13

// Your friend Billybob has a crush on the girl next to him in class, Emily,
// but wants to talk with you about what he should do, but doesn't want her to overhear.
// Send secret messages to Billybob by translating your messages into pig latin.

// Create a function, called translate(), that takes a string argument and returns the input string into "pig latin"

// The rules to translate into pig latin are as follows:

// Valid words are 2 or more letters long
// If a word begins with a consonant (a letter NOT 'a','e','i','o', or 'u'),
// then that first letter is shifted to the end of the word
// Then add "ay"

// translate("billy"); // => "illybay"
// translate("emily"); // => "emilyay"

// Note:
// If the string input is less than 2 letters, the input should be returned as is
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const translate = function (word) {
  if (word.length < 2) {
    return word;
  } else if (word.charAt(0).match(/[aeiou]/g)) {
    return word + "ay";
  } else {
    return word.substr(1) + word.substr(0, 1) + "ay";
  }
};

/////// SOLUTION ///////
