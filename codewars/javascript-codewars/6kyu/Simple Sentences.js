////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript

// Implement a function, so it will produce a sentence out of the given parts.

// Array of parts could contain:
// words;
// commas in the middle;
// multiple periods at the end.

// Sentence making rules:
// there must always be a space between words;
// there must not be a space between a comma and word on the left;
// there must always be one and only one period at the end of a sentence.
// Example:

// makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function makeSentence(parts) {
  let sentences = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === ".") {
      sentences.push(null);
    } else {
      sentences.push(parts[i]);
    }
  }

  return sentences.join(" ").trim().replace(/ , /g, ", ") + ".";
}

/////// SOLUTION ///////
