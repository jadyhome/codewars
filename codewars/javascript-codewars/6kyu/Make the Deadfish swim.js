////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

// Return the output array, and ignore all non-op characters
function parse(data) {
  let output = [];
  let value = 0;

  data = data.split("");

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      value++;
    }
    if (data[i] === "d") {
      value--;
    }
    if (data[i] === "s") {
      value = Math.pow(value, 2);
    }
    if (data[i] === "o") {
      output.push(value);
    }
  }
  return output;
}

/////// SOLUTION ///////
