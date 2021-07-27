////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function count(string) {
  // The function code should be here
  let aCount = 0;
  let bCount = 0;

  if (string === "") {
    return {};
  }
  
  string = string.split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      aCount++;
    } else {
      bCount++;
    }
  }

  if (aCount > 0 && bCount === 0) {
    return { a: aCount };
  }
  if (bCount > 0 && aCount === 0) {
    return { b: bCount };
  }
  if (aCount > 0 && bCount > 0) {
    return { a: aCount, b: bCount };
  }
}

/////// SOLUTION ///////
