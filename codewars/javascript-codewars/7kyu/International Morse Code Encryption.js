////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/55b8c0276a7930249e00003c/train/javascript

// Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

// Characters should be separated by a single space. Words should be separated by a triple space.

// For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

// To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code

// A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function encryption(message) {
  message = message.split("");
  let morse = message.map((m) => CHAR_TO_MORSE[m] || m);

  return morse.join(" ");
}

/////// SOLUTION ///////
