////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57b56af6b69bfcffb80000d7/train/javascript

// Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

// Note: initials should be separated with a space.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function toInitials(name) {
  name = name.split(" "); // using split() method to split the string

  if (name.length === 3) { // if length of array is 3
    return `${name[0].charAt(0)}. ${name[1].charAt(0)}. ${name[2].charAt(0)}.`; 
    // we return the initials by using charAt() method
    // charAt(0): the first character of each string in the array
  } else {
    return `${name[0].charAt(0)}. ${name[1].charAt(0)}.`;
    // else, we return just the first characters of the first name and last name
  }
}

/////// SOLUTION ///////
