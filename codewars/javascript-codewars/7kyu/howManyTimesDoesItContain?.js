////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/584466950d3bedb9b300001f/train/javascript

// Your task is to return how many times a string contains a given character.

// The function takes a string(inputS) as a parameter
// and a char(charS) which is the character that you will have to find and count.

// For example, if you get an input string "Hello world" and the character to find is "o", return 2.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function stringCounter(inputS, charS) {
  let count = 0 // initialize a variable 'count' where we can keep count of the occurence of 'charS' in 'inputS'

  // using for loop to iterate through the length of the 'inputS' string
  for (let i = 0; i < inputS.length; i++) {
    if (inputS.charAt(i) === charS) { // using charAt(), we find if the 'i' element in 'inputS' equals to 'charS'
      count += 1 // we increment count by 1 - if 'charS' occurs in the 'inputS'
    }
  }
  return count // return the variable 'count'
}

/////// SOLUTION ///////
