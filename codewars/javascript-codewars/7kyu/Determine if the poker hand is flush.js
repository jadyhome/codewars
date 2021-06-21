////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/train/javascript

// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings,
// each representing a poker card in the format "5H" (5 of hearts),
// meaning the value of the card followed by the initial of its suit
// (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.
// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true
// ["AD", "4S", "7H", "KS", "10S"] ==> false
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function isFlush(cards) {
  let spades = cards.map((x) => x.includes("S"));
  let hearts = cards.map((x) => x.includes("H"));
  let diamonds = cards.map((x) => x.includes("D"));
  let clubs = cards.map((x) => x.includes("C"));

  if (
    spades.every((t) => t === true) ||
    hearts.every((h) => h === true) ||
    diamonds.every((d) => d === true) ||
    clubs.every((c) => c === true)
  ) {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
