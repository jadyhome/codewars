////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
// and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function toWeirdCase(string) {
  string = string.split(" ");
  let weirdStrings = [];

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      weirdStrings.push(string[i].toUpperCase());
    } else {
      weirdStrings.push(string[i].toLowerCase());
    }
  }

  let weirdCase = weirdStrings.map((word) =>
    word
      .split("")
      .map((letter, index) =>
        index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
      )
      .join("")
  );

  return weirdCase.join(" ");
}

/////// SOLUTION ///////
