////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

// Given a string of words and numbers. Extract the expression including:
// the operator: either addition or subtraction
// the two numbers that we are operating on
// Return the result of the calculation.

// Example:
// "Panda has 48 apples and loses 4" returns 44
// "Jerry has 34 apples and gains 6" returns 40
// "loses" and "gains" are the only two words describing operators.

// Should be a nice little kata for you :)
// Note: No fruit debts nor bitten apples = The numbers are integers and no negatives
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function calculate(string) {
  let num = string
    .replace(/[^0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");

  if (string.includes("gains")) {
    return num.map((n) => Number(n)).reduce((a, b) => a + b);
  }
  if (string.includes("loses")) {
    return num.map((n) => Number(n)).reduce((a, b) => a - b);
  }
}

/////// SOLUTION ///////
