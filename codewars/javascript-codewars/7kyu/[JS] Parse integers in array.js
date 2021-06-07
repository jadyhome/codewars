////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/535d118ccdbf501816001101/train/javascript

// A colleague asked if you can help him fix his function.
// It seems it doesn't always parse Integers correctly.

// Examples:

// parseNumbers(['10']) // should return [10]
// parseNumbers(['-1','0','1']) // should return [-1,0,1]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers
 */
var parseNumbers = function (intStrs) {
  let num = intStrs.map((n) => Number(Math.trunc(n)));
  return num;
};

/////// SOLUTION ///////
