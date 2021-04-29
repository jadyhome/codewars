////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// Sexy primes are pairs of two primes that are 6 apart.
// In this kata, your job is to complete the function sexy_prime(x, y)
// which returns true if x & y are sexy, false otherwise.

// Examples:
// sexy_prime(5,11)
// --> True

// sexy_prime(61,67)
// --> True

// sexy_prime(7,13)
// --> True

// sexy_prime(5,7)
// --> False

// sexy_prime(1,7)
// --> False
// ( 1 is not considered prime )

// Note: x & y are always positive integers > 0,
// but they are not always in order of precendence...you can be given either (5,11) or (11,5).
// Both are equally valid.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sexy_prime(x, y) {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  if (x === 1 || y === 1) {
    return false;
  } else if (x + 6 === y || x - 6 === y) {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
