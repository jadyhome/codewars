////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript

// Being a bald man myself, I know the feeling of needing to keep it clean shaven.
// Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/".
// Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed.
// Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:
// ["-------------", "Unicorn"]
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function bald(x) {
  let hair = x.match(/[/]/gi);
  let shaved = x.replace(/[/]/gi, "-");

  if (hair === null || hair.length === 0) {
    return [shaved, "Clean!"];
  }
  if (hair.length === 1) {
    return [shaved, "Unicorn!"];
  }
  if (hair.length === 2) {
    return [shaved, "Homer!"];
  }
  if (hair.length === 3 || hair.length === 4 || hair.length === 5) {
    return [shaved, "Careless!"];
  }
  if (hair.length > 5) {
    return [shaved, "Hobo!"];
  }
}

/////// SOLUTION ///////
