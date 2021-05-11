////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/580a0347430590220e000091/train/javascript

// Find the area of a rectangle when provided with one diagonal and one side of the rectangle.
// If the input diagonal is less than or equal to the length of the side, return "Not a rectangle".
// If the resultant area has decimals round it to two places.

////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function area(d, l) {
  let w = Math.sqrt(d * d - l * l);
  let area = l * w;

  if (d <= l) {
    return "Not a rectangle";
  } else {
    return Math.round(area * 100) / 100;
  }
}

/////// SOLUTION ///////
