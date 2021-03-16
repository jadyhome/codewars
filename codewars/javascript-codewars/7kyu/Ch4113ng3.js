////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1
// e.g. "Fundamentals" --> "Fund4m3nt41s"
////////////////////////////////////////////////////////////////////////

/////// SOLUTION ///////

function nerdify(txt) {
  return txt.replace(/[aA]/gi, "4").replace(/[eE]/gi, "3").replace(/[l]/g, "1")

  // using replace() method and regex
  // first we check the string for the letters 'a' / 'A' with global search - 'g' and case insensitive search - 'i'
  // and then replace 'a' and 'A' with 4

  // then we check the string for the letters 'e' / 'E' with global search - 'g' and case insensitive search - 'i'
  // and we replace 'e' and 'E' with 3

  // finally, we check the string for the letters 'l' with just global search - 'g' 
  // because we only want to replace the lowercase 'l' with 1
  // and we return the whole function
}

/////// SOLUTION ///////
