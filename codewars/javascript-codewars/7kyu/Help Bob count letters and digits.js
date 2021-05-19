////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

// Bob is a lazy man.
// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6
// "wicked .. !" --> 6
// "!?..A" --> 1
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function countLettersAndDigits(input) {
  input = input.split("");
  let num = input.filter((n) => n.match(/[0-9]/g)).length;
  let letter = input.filter((l) => l.match(/[a-z]/gi)).length;

  return num + letter;
}

/////// SOLUTION ///////
