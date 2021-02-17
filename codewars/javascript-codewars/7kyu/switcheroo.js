////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

// Given a string made up of letters a, b, and/or c,
// switch the position of letters a and b (change a to b and vice versa).
// Leave any incidence of c untouched.

// Example:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function switcheroo(x) {
  const switched = x.replace(/[ab]/g, (y) => (y === "a" ? "b" : "a"))
  // using the replace() method
  // using a character set: matches any single character from the characters within the brackets. 
  // in this case: [ab] with a g - meaning global search
  // function(y) to return condition 1: if y equals to "a" then return "b"
  // else return "a" if y equals "b"

  return switched // returning the new string where the letters a & b are switched
}

/////// SOLUTION ///////
