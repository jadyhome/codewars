////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/58305403aeb69a460b00019a/train/javascript

// Given 2 string parameters, show a concatenation of:
// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

// ** Keep in mind that this kata was initially designed for Shell,
// I'm aware it may be easier in other languages.**
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function reverseAndMirror(s1, s2) {
  s2 = s2
    .split("")
    .reverse()
    .map((sTwo) =>
      sTwo === sTwo.toUpperCase() ? sTwo.toLowerCase() : sTwo.toUpperCase()
    )
    .join("");

  s1 = s1
    .split("")
    .reverse()
    .map((sOne) =>
      sOne === sOne.toUpperCase() ? sOne.toLowerCase() : sOne.toUpperCase()
    )
    .join("");

  return `${s2}@@@${s1}${s1.split("").reverse().join("")}`;
}

/////// SOLUTION ///////
