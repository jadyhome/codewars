////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57fe864854685b1c420002e0/train/javascript

// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
// var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// Example 2
// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

// Each element in the arrays will start with a unique letter so there will only be a single match for each element.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sortArray(a1, a2) {
  const sorted = a1.map((char1) => a2.find((char2) => char1[0] === char2[0]));
  // creating a new variable -- 'sorted'
  // we use the map() method, to iterate through the array of 'a1'
  // char1 -- is the element being processed in the array of 'a1'

  // then we use the find() method, to find the value of the first element that satisfies the provided testing function
  // char2 -- is the element being processed in the array of 'a2'
  
  // when the index of 0 in char1 equals to the index of 0 in char2

  return sorted; // we return the array 'sorted' where the first letters in both arrays match
}

/////// SOLUTION ///////
