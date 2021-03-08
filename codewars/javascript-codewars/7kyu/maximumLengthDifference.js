////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z.
// Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function mxdiflg(a1, a2) {
  if ( a1.length === 0 || a2.length === 0 ) { return -1 }
  // using if statement, if the length of the first array 
  // or the length of the second array is empty; equals to 0
  // return -1

  // map() method to map through the array, and return the lengths of each string
  let x = a1.map((a) => a.length)
  let y = a2.map((b) => b.length)

  let num1 = Math.max(...x) - Math.min(...y) 
  // for num1, we find the maximum value in the x array and the minimum value in the y array
  // and we subtract them to get the difference

  let num2 = Math.max(...y) - Math.min(...x)
  // for num2, we find the maximum value in the y array and the minimum value in the x array
  // and we subtract them to get the difference

  // because we want the maximum integer in the length difference:
  if ( num1 > num2 ) { return num1 } // if num1 is greater than num2, we return num1
  if ( num1 < num2 ) { return num2 }// if num1 is less than num2, we return num2
  if ( num1 === num2 ) { return num1 || num2 } // if num1 and num2 are the same, we return either num1 or num2
}

/////// SOLUTION ///////
