////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

// Reverse every other word in a given string, then return the string. 
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
// Punctuation marks should be treated as if they are a part of the word in this kata.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function reverse(str) {
  //WRITE SOME MAGIC
  let newString = [];
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      newString.push(str[i]);
    } else {
      newString.push(str[i].split("").reverse().join(""));
    }
  }

  if (str.includes("")) {
    return "";
  } else {
    return newString.join(" ");
  }
}

/////// SOLUTION ///////
