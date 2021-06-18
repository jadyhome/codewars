////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript

// Build a function that will take the length of each side of a triangle
// and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

var typeOfTriangle = function (sideA, sideB, sideC) {
  if (
    typeof sideA !== "number" ||
    typeof sideB !== "number" ||
    typeof sideC !== "number"
  ) {
    return "Not a valid triangle";
  }
  if (
    !(sideA + sideB > sideC) ||
    !(sideB + sideC > sideA) ||
    !(sideC + sideA > sideB)
  ) {
    return "Not a valid triangle";
  }
  if (sideA === sideB && sideB === sideC && sideC === sideA) {
    return "Equilateral";
  }
  if (sideA === sideB || sideB === sideC || sideC === sideA) {
    return "Isosceles";
  }
  if (sideA !== sideB && sideB !== sideC && sideC !== sideA) {
    return "Scalene";
  }
};

/////// SOLUTION ///////
