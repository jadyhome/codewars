////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5168b125faced29f66000005/javascript

// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function solution(fullText, searchText) {
  if (!fullText.match(new RegExp(searchText, "gi"))) {
    return 0;
  } else {
    return fullText.match(new RegExp(searchText, "gi")).length;
  }
}

/////// SOLUTION ///////
