////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59ff4709ba2a14501500003a/train/javascript

// Given an array of strings, sort the array into order of weight from light to heavy.
// Weight units are grams(G), kilo-grams(KG) and tonnes(T).
// Arrays will always contain correct and positive values aswell as uppercase letters.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function arrange(arr) {
  let gram = arr
    .filter((g) => !g.match(/[KT]/))
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  let kilogram = arr
    .filter((kg) => kg.match(/[K]/))
    .sort((c, d) =>
      c.localeCompare(d, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  let ton = arr
    .filter((t) => t.match(/[T]/))
    .sort((e, f) =>
      e.localeCompare(f, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  return gram.concat(kilogram).concat(ton);
}

/////// SOLUTION ///////
