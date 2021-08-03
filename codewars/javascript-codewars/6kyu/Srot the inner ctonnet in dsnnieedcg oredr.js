////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript

// #Srot the inner ctnnoet in dsnnieedcg oredr

// You have to sort the inner content of every word of a string in descending order.
// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me" -> "wiat for me"
// "this kata is easy" -> "tihs ktaa is esay"
// The string will never be null and will never be empty.
// It will contain only lowercase-letters and whitespaces.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sortTheInnerContent(words) {
  let sorted = words.split(" ").map((v) =>
    v.length > 1
      ? (v =
          v.slice(0, 1) +
          v
            .slice(1, -1)
            .split("")
            .sort((a, b) => b > a)
            .join("") +
          v.slice(-1))
      : v
  );

  return sorted.join(" ");
}

/////// SOLUTION ///////
