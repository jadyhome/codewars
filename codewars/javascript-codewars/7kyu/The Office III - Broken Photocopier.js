////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript

// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
// Given a string of binary, return the version the photocopier gives you as a string.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function broken(x) {
  let reversedBinary = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "1") {
      reversedBinary += "0";
    } else {
      reversedBinary += "1";
    }
  }
  return reversedBinary;
}

/////// SOLUTION ///////
