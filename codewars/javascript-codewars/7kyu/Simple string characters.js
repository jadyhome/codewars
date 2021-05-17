////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

// In this Kata, you will be given a string and your task will be to return a list of ints
// detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.
// Good luck!
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function solve(s) {
  s = s.split("");
  let upper = s.filter((u) => u.match(/[A-Z]/g));
  let lower = s.filter((l) => l.match(/[a-z]/g));
  let nums = s.filter((n) => n.match(/[0-9]/g));
  let special = s.filter((s) => s.match(/[^a-zA-Z0-9]/g));

  return [upper.length, lower.length, nums.length, special.length];
}

/////// SOLUTION ///////
