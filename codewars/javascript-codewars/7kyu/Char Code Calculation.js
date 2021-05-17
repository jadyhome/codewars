////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

// Given a string, turn each character into its ASCII character code
// and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function calc(x) {
  x = x.split("");
  let total1 = x.map((num) => num.charCodeAt()).join("");
  let total2 = total1.replace(/7/g, "1");

  total1 = total1
    .split("")
    .map((one) => Number(one))
    .reduce((a, b) => a + b);
  total2 = total2
    .split("")
    .map((two) => Number(two))
    .reduce((c, d) => c + d);

  return total1 - total2;
}

/////// SOLUTION ///////
