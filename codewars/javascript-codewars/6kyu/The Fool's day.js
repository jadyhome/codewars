////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59a3f82749ae65de2c000050/train/javascript/61085efbbcc1ea003e83b28d

// Fool's Day
// Since today is April's Fools day,Abigail suspects that the news she is reading about today are false.
// She is worried to look silly to other participants.

// She knows that the news is false if it contains the string "abigail" as a subsequence.

// Help Abigail determine whether this piece of news is true.

// INPUT The first and only line contains a non-empty string s of length no greater than 1000,
// consisting of lowercase letters of Latin alphabet (a-z).

// OUTPUT Output YES if the string s contains the sequence "abigail" as a subsequence.
// Otherwise, output NO
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function newsIsFalse(news) {
  let str1 = news.split("");
  let str2 = "abigail".split("");

  let l = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[l]) {
      l++;
    }
  }

  if (l === str2.length) {
    return "YES";
  } else {
    return "NO";
  }
}

/////// SOLUTION ///////
