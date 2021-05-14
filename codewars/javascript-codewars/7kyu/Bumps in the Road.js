////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

// Your car is old, it breaks easily.
// The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy!
// Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely.
// 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function bump(x) {
  x = x.split("");
  let bump = x.filter((b) => b === "n").length;

  if (bump <= 15) {
    return "Woohoo!";
  }
  if (bump > 15) {
    return "Car Dead";
  }
}

/////// SOLUTION ///////
