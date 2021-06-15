////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby

// Don't worry about uppercase vowels.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function shortcut(string) {
  string = string.split("");

  let noVowels = string.filter((v) => !v.match(/[aeiou]/g)).join("");
  return noVowels;
}

/////// SOLUTION ///////
