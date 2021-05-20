////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

// Some people just have a first name; some people have first and last names
// and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function initializeNames(name) {
  name = name.split(" ");
  let first = name.slice(0, 1).join(" ");
  let last = name.slice(-1).join(" ");
  let middle = name
    .slice(1, -1)
    .map((m) => m.charAt(0) + ".")
    .join(" ");

  if (name.length === 1) {
    return `${first}`;
  } else if (name.length === 2) {
    return `${first} ${last}`;
  } else {
    return `${first} ${middle} ${last}`;
  }
}

/////// SOLUTION ///////
