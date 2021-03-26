////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function moveVowel(input) {
  let consonant = []; // initiating an empty array for the consonants
  let vowels = []; // initiating an empty array for the vowels
  input = input.split(""); // split() method to split the string into individual strings for each letter

  // for loop to loop through the length of the input array
  for (let i = 0; i < input.length; i++) {
    if (input[i].match(/[aeiou]/i)) { // if element of 'i' in the input array matches any of the vowels - 'aeiou'
      vowels.push(input[i]); // we push the elements that matches the vowels into the empty vowels array
    } else {
      consonant.push(input[i]); // else, we push the elements that are not vowels into the empty consonants array
    }
  }
  return consonant.concat(vowels).join(""); 
  // we return the concatenated arrays together -- using the concat() method
  // consonant array first, joined by the vowels array
  // then we use join() method to join the strings in the array back into a whole string
}

/////// SOLUTION ///////
