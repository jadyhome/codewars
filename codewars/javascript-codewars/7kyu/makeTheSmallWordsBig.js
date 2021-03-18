////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57b4dd38d2a31c75f7000299/train/javascript

// Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...

// Your task is to make all words which are 3 characters or less into capitals.
// You should also remove any vowels from 'long' (4 characters or more) words.

// For example:
// "The quick brown fox jumps over the lazy dog"

// Should become:
// "THE qck brwn FOX jmps vr THE lzy DOG"

// For the purposes of this kata, mid-word punctuation counts towards the character limit of a word.
// e.g: "it's / I'm" should become: "t's / I'M"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function smallWordHelper(sentence) {
  let answer = []; // initiate an empty array where we will push the words into later

  sentence = sentence.split(" "); // split() method to split the string into individual strings into an array

  // using a for loop, we loop through the length of each element in the sentence array
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length < 4) { // if the element length is less than 4
      answer.push(sentence[i].toUpperCase()); 
      // we change that element to uppercase and push it into the 'answer' array
    } else {
      answer.push(sentence[i].replace(/[aeiou]/gi, "")); 
      // else, we remove all vowels from elements with 4 or more characters
      // and push it into the 'answer' array
    }
  }
  return answer.join(" "); // returning a joined string from the 'answer' array
}

/////// SOLUTION ///////
