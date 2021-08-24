////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/558878ab7591c911a4000007/train/javascript

// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.
// So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

// The rules themselves are rather easy:
// 1. The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".
// 2. The word starts with a consonant -> move consonants from the beginning of the word to the end of the word
// until the first vowel, then return it plus "ay".
// 3. The result must be lowercase, regardless of the case of the input.
// If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).
// 4. The function must also handle simple random strings and not just English words.
// 5. The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants,
// so they are moved to the end of the string and "ay" is appended.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function pigLatin(string) {
  string = string.toLowerCase();
  if (string.match(/[0-9]/g)) {
    return null;
  }
  if (string[0].match(/[aeiou]/g)) {
    return string + "way";
  }
  if (!string.match(/[aeiou]/gi)) {
    return string + "ay";
  }

  for (let i = 0; i < string.length; i++) {
    if (string[0].match(/[aeiou]/g)) {
      return string + "ay";
    } else {
      let consonants = string[0];
      string = string.slice(1) + consonants;
    }
  }
}

/////// SOLUTION ///////
