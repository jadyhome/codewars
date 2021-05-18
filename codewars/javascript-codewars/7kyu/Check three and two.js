////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran),
// check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function checkThreeAndTwo(array) {
  let a = array.filter((letter) => letter.match(/[a]/g));
  let b = array.filter((letter) => letter.match(/[b]/g));
  let c = array.filter((letter) => letter.match(/[c]/g));

  if (
    (a.length === 3 || b.length === 3 || c.length === 3) &&
    (a.length === 2 || b.length === 2 || c.length === 2)
  ) {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
