////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59f897ecc374cb9ed90000c2/train/javascript

// Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function monkeyTalk(phrase) {
  phrase = phrase.split(" ");

  let monkey = [];

  for (let m = 0; m < phrase.length; m++) {
    if (phrase[m].slice(0, 1).match(/[^aeiou]/gi)) {
      monkey.push("Ook");
    } else {
      monkey.push("Eek");
    }
  }

  let firstElement = monkey.slice(0, 1).join(" ");
  let everythingElse = monkey.slice(1).join(" ").toLowerCase();

  if (monkey.length < 2) {
    return firstElement + ".";
  } else {
    return firstElement + " " + everythingElse + ".";
  }
}

/////// SOLUTION ///////
