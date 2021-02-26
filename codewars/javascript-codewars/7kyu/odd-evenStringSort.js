////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

// Given a string S. You have to return another string such that even-indexed
// and odd-indexed characters of S are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'

// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

// Enjoy.

////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sortMyString(S) {
  S = S.split("") 
  // split() method to split a string into an array of substrings, and return the new array

  let evenIndex = S.filter((a, b) => b % 2 === 0) 
  // filter() method to filter out a new array with just the even indices
  let oddIndex = S.filter((a, b) => b % 2 === 1)
  // filter() method to filter out a new array with just the odd indices

  evenIndex = evenIndex.join("")
  oddIndex = oddIndex.join("")
  // join() method to join the array back into a string

  return `${evenIndex} ${oddIndex}`
  // returning the final string using template literals calling evenIndex and oddIndex
}

/////// SOLUTION ///////
