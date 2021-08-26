////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change
// if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment.
// Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function tickets(peopleInLine) {
  let bill25 = 0;
  let bill50 = 0;
  let bill100 = 0;

  for (let bill in peopleInLine) {
    if (peopleInLine[bill] === 25) {
      bill25++;
    } else if (peopleInLine[bill] === 50) {
      bill25--;
      bill50++;
    } else {
      // for if customer has the $100 bill
      if (bill25 >= 1 && bill50 >= 1) {
        bill25--;
        bill50--;
        bill100++;
      } else if (bill25 >= 3 && bill50 === 0) {
        bill25 -= 3;
        bill100++;
      } else {
        bill25 -= 3;
        bill100++;
      }
    }
    if (bill25 < 0 || bill50 < 0 || bill100 < 0) {
      return "NO";
    }
  }
  return "YES";
}

/////// SOLUTION ///////
