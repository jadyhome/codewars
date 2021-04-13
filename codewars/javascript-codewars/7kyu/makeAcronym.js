////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/557efeb04effce569d000022/train/javascript

// Implement a function called makeAcronym that returns the first letters of each word in a passed in string.
// Make sure the letters returned are uppercase.
// If the value passed in is not a string return 'Not a string'.
// If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.
// If the string is empty, just return the string itself: "".

// EXAMPLES:
// 'Hello codewarrior' -> 'HC'
// 'a42' -> 'Not letters'
// 42 -> 'Not a string'
// [2,12] -> 'Not a string'
// {name: 'Abraham'} -> 'Not a string'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

var makeAcronym = function (string) {
  if (typeof string === "number") {
    return "Not a string";
  }
  if (typeof string === "object") {
    return "Not a string";
  }
  if (string.match(/[0-9]/g)) {
    return "Not letters";
  }
  if (string.length === 0) {
    return "";
  }

  string = string.split(" ");
  const acronym = string.map((a) => a[0].toUpperCase()).join("");
  return acronym;
};

/////// SOLUTION ///////
