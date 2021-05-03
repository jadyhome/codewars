////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript

// Create an algorithm to count the number of zeros that appear between 1 and N.

// Examples:
// There are 2 zeros from 1 to 20: 10, 20
// There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

// countZeros(10); // returns 1
// countZeros(100); // returns 11
// countZeros(200); // returns 31
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function countZeros(n) {
  let nums = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  nums = nums
    .map((n) => String(n))
    .filter((zs) => zs.includes("0"))
    .join("");

  return nums.match(/[0]/g).length;
}

/////// SOLUTION ///////
