////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function problem(x) {
  if (typeof(x) === "number") {
    return (x * 50) + 6
  } else {
    return "Error"
  }
}

/////// SOLUTION ///////
