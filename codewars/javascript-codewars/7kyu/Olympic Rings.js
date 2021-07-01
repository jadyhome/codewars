////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript

// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// Given a string of random letters, you need to examine each.
// Some letters naturally have 'rings' in them. 'O' is an obvious example,
// but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!!
// Please note for this kata you can count lower case 'g' as only one ring.

// Your job is to count the 'rings' in each letter and divide the total number by 2.
// Round the answer down. Once you have your final score:

// if score is 1 or less, return 'Not even a medal!';
// if score is 2, return 'Bronze!';
// if score is 3, return 'Silver!';
// if score is more than 3, return 'Gold!';

// Dots over i's and any other letters don't count as rings.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function olympicRing(a) {
  let rings = {
    "a": 1, "A": 1, "b": 1, "B": 2,
    "d": 1, "D": 1, "e": 1, "g": 1,
    "o": 1, "O": 1, "p": 1, "P": 1,
    "q": 1, "Q": 1, "R": 1,
  };

  a = a.split("");
  let letters = a.filter((l) => l.match(/[AaBbDdegOoPpQqR]/g));
  let score = Math.floor(
    letters.map((c) => (c = rings[c])).reduce((a, b) => a + b, 0) / 2
  );

  if (score <= 1) { return "Not even a medal!" };
  if (score === 2) { return "Bronze!" };
  if (score === 3) { return "Silver!" };
  if (score > 3) { return "Gold!" };
}

/////// SOLUTION ///////
