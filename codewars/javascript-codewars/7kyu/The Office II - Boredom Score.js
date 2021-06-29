////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

// Every now and then people in the office moves teams or departments.
// Depending what people are doing with their time they can become more or less boring.
// Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:
// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function boredom(staff) {
  let boredomScore = {
    "accounts": 1,
    "finance": 2,
    "canteen": 10,
    "regulation": 3,
    "trading": 6,
    "change": 6,
    "IS": 8,
    "retail": 5,
    "cleaning": 4,
    "pissing about": 25,
  };

  let departments = Object.values(staff);
  let score = departments.map((s) => (s = boredomScore[s]));
  score = score.reduce((a, b) => a + b);

  if (score <= 80) {
    return "kill me now";
  } else if (score < 100 && score > 80) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}

/////// SOLUTION ///////
