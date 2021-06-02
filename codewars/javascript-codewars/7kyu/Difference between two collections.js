////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript

// Find the difference between two collections.
// The difference means that either the character is present in one collection
// or it is present in other, but not in both. Return a sorted set with difference.

// The collections can contain any character and can contain duplicates.

// For instance:
// A = [a,a,t,e,f,i,j]
// B = [t,g,g,i,k,f]
// difference = [a,e,g,j,k]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function diff(a, b) {
  let difference = a
    .filter((x) => !b.includes(x))
    .concat(b.filter((x) => !a.includes(x)));

  difference = difference.filter((v, i) => difference.indexOf(v) === i).sort();

  return difference;
}

/////// SOLUTION ///////
