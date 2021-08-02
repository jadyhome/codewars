////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/55b080eabb080cd6f8000035/train/javascript

// Complete the function that takes a string as an input, and return a list of all the unpaired characters
// (i.e. they show up an odd number of times in the string), in the order they were encountered as an array.

// In case of multiple appearances to choose from, take the last occurence of the unpaired character.

// Notes:
// A wide range of characters is used, and some of them may not render properly in your browser.
// Your solution should be linear in terms of string length to pass the last test.
// Examples
// "Hello World"   -->  ["H", "e", " ", "W", "r", "l", "d"]
// "Codewars"      -->  ["C", "o", "d", "e", "w", "a", "r", "s"]
// "woowee"        -->  []
// "wwoooowweeee"  -->  []
// "racecar"       -->  ["e"]
// "Mamma"         -->  ["M"]
// "Mama"          -->  ["M", "m"]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function oddOneOut(str) {
  str = str.split("");

  let oddOneOut = new Set();
  str.forEach((value) => oddOneOut.delete(value) || oddOneOut.add(value));

  return [...oddOneOut];
}

/////// SOLUTION ///////
