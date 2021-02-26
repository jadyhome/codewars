////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Instructions
// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const capitals = (word) => {
  let indexes = []; // initialize an empty array to fill in the indexes of all capital letters in the string

  // using for loop to loop through the string, iterating through the length of the word
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[A-Z]/) !== null) {
      // if the index of the word matches all capital letters, using regex with a set of all capital letters
      // and the letters match any capital letters is not null
      indexes.push(i);
      // we push each index (i) of each capital letter into the indexes array we initialized in the beginning
    }
  }
  return indexes; // returning the indexes array
};

/////// SOLUTION ///////
