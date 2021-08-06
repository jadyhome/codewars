////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function decipherThis(str) {
  let decipher1 = str.replace(/\d+/g, (char) => String.fromCharCode(char));
  let deciphered = decipher1
    .split(" ")
    .map((word) =>
      word.length > 2
        ? word.slice(0, 1) +
          word.slice(-1) +
          word.slice(2, -1) +
          word.slice(1, 2)
        : word
    );

  return deciphered.join(" ");
}

/////// SOLUTION ///////
