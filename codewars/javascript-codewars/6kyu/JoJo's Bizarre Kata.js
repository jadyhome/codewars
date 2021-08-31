////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/55327e12f5363713200000e4/train/javascript

// #Introduction - JoJo's World
// ...

// #Instructions
// ...
// Now, the drill in this kata is rather easy:
// either create a regex expression or a function to find if a given name is a proper JoJo
// or not in boolean terms (true/True if it is valid, false/False otherwise).

// To recap, you have a valid JoJo if:
// both your firstname and your surname start with "Jo-"
// your firstname starts with "Jo-" and your surname ends with "-Jo"
// both your firstname and your surname start with "Gio-"
// don't expect the to have a string formed by only two words joined by a space: strings may be of 1 word, 2 words, 3 words or more
// you will be helped: lower-/upper-case will not matter here
// you still may consider the first word as the firstname and the last word as the surname

// Some examples to clarify even better:
// "Joseph Joestar" => valid JoJo name
// "Dio Brando" => invalid JoJo name
// "George Joestar II" => invalid JoJo name (still cool, though)
// "Giorno Giovanna" => valid JoJo name
// "Josuke Joestar" => valid JoJo name (not his actual surname, but ok)
// "Kars" => invalid JoJo name
// "Caesar Zeppeli" => invalid JoJo name
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

/*you can either create a valid regex to find if a character
is a JoJo or create a function for it.
bonus points if you do both ;)*/

/*Oh, and think about beginners: try to be informative and
comment with some explanation for the sake of their learning!*/

// var regex = /regex/; //your regex here or...

function isJojo(name) {
  name = name.toLowerCase();
  let firstname = name.split(" ")[0];
  let lastname = name.split(" ")[1];

  if (firstname.slice(0, 2) === "jo" && lastname.slice(0, 2) === "jo") {
    return true;
  } else if (firstname.slice(0, 2) === "jo" && lastname.slice(-2) === "jo") {
    return true;
  } else if (firstname.slice(0, 3) === "gio" && lastname.slice(0, 3) === "gio") {
    return true;
  } else {
    return false;
  }
}

/////// SOLUTION ///////
