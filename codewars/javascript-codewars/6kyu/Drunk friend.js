////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/558ffec0f0584f24250000a0/train/javascript

// You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak,
// and when he wants to say something, he writes it down on a paper.
// However, none of the words he writes make sense to you.
// He wants to help you, so he points at a beer and writes "yvvi".
// You start to understand what he's trying to say, and you write a script, that decodes his words.

// Keep in mind that numbers, as well as other characters, can be part of the input,
// and you should keep them like they are. You should also test if the input is a string.
// If it is not, return "Input is not a string".
////////////////////////////////////////////////////////////////////////

/////// SOLUTION ///////

function decode(str) {
  if (typeof str !== "string") {
    return "Input is not a string";
  }

  let alphabet = {
    a: "z", b: "y", c: "x", d: "w", e: "v", f: "u", g: "t", 
    h: "s", i: "r", j: "q", k: "p", l: "o", m: "n", n: "m", o: "l", p: "k",
    q: "j", r: "i", s: "h", t: "g", u: "f", v: "e", 
    w: "d", x: "c", y: "b", z: "a",

    A: "Z", B: "Y", C: "X", D: "W", E: "V", F: "U", G: "T",
    H: "S", I: "R", J: "Q", K: "P", L: "O", M: "N", N: "M", O: "L", P: "K",
    Q: "J", R: "I", S: "H", T: "G", U: "F", V: "E",
    W: "D", X: "C", Y: "B", Z: "A",
  };

  str = str.split("");
  let decoded = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/g)) {
      decoded.push((str[i] = alphabet[str[i]]));
    } else {
      decoded.push(str[i]);
    }
  }

  return decoded.join("");
}

/////// SOLUTION ///////
