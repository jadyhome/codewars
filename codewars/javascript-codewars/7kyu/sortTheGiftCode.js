////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts 
// by assigning a unique alphabetical character to each gift. 
// After each gift was assigned a character, 
// the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, 
// but the Elf fell asleep from consuming too much hot chocolate and candy canes! 
// Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string 
// containing up to 26 unique alphabetical characters, 
// and returns a string containing the same characters in alphabetical order.

// Examples:
// sortGiftCode( 'abcdef' ); //=> returns 'abcdef'
// sortGiftCode( 'pqksuvy' ); //=> returns 'kpqsuvy'
// sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' ); //=> returns 'abcdefghijklmnopqrstuvwxyz'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sortGiftCode(code) {
  code = code.split("") // split() method to split the string into an array of individual letters
  let sorted = code.sort().join("")
  // create a new variable call "sorted"
  // using the sort() method to sort the letters alphabetically
  // using the join() method to join the letters back into a string

  return sorted // returning final answer
}

/////// SOLUTION ///////
