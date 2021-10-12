////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters
// then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function solution(str) {
  if (str === "") {
    return [];
  }

  let twos = str.match(/..?/gi);

  let result = [];
  for (let i = 0; i < twos.length; i++) {
    if (twos[i].length === 2) {
      result.push(twos[i]);
    } else {
      result.push(twos[i] + "_");
    }
  }
  return result;
}

/////// SOLUTION ///////
