////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a15d9b0ffe75f3199000191/train/javascript

// You've gone out hunting for double rainbows!

// Given a random string of letters, 
// create a function that will determine if the string contains all the letters necessary to construct (without spaces) 
// the seven colours of the rainbow: Red, Orange, Yellow, Green, Blue, Indigo, Violet.

// Some strings may not contain all the letters to construct the rainbow, 
// some strings may simply be too short and some strings may even contain the coveted Double Rainbow!

// **OUTPUT**
// * If there are enough letters to fully construct one rainbow, return ```Look! A rainbow!```

// Example (all 36 letters can be found in both): 
// ```REDORANGEYELLOWGREENBLUEINDIGOVIOLET``` 
// ```EKPREINEFZGSEQDNROEMBXGIROUOMONGTYALBVLUWVDHGSEALGOAILLKEEIDNRJTLTVYEHIBC```

// If the string is too short to possibly contain all necessary letters, return Too short for a rainbow!
// If the string is long enough, but the letters to construct the rainbow cannot be found within, return No rainbow to be found!
// If there are enough letters to fully construct two whole rainbows, return Double rainbow all the way!

// Example (2x all 36 letters can be found in both): 
// ```REDORANGEYELLOWGREENBLUEINDIGOVIOLETREDORANGEYELLOWGREENBLUEINDIGOVIOLET``` 
// ```WGVGEYETILNRTEEBRJOGNKLISNYWVNMGELEOEQLKENIOFPUUDGNAZDENLVBLOYTXANOGAIQCRIOOOOJIMOERLLBEEDRDEUAIHLRFREUDEDGX```

// NOTES
// * The only characters the string will contain are upper-case letters (A-Z) * 
// The string will always be at least one character in length, and may be longer than 200 characters
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function willThereEverBeARainbow(string) {
  if (string.length < 36) {
    return "Too short for a rainbow!";
  }

  let rainbow = {
    R: 3, E: 7, D: 2, O: 4, A: 1,
    N: 3, G: 3, Y: 1, L: 4, W: 1,
    B: 1, U: 1, I: 3, V: 1, T: 1,
  };
  let doubleRainbow = {
    R: 6, E: 14, D: 4, O: 8, A: 2,
    N: 6, G: 6, Y: 2, L: 8, W: 2,
    B: 2, U: 2, I: 6, V: 2, T: 2,
  };

  let stringCount = string
    .split("")
    .reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  if (Object.keys(doubleRainbow).every((dr) => doubleRainbow[dr] <= stringCount[dr])) {
    return "Double rainbow all the way!";
  } else if (Object.keys(rainbow).every((r) => rainbow[r] <= stringCount[r])) {
    return "Look! A rainbow!";
  } else {
    return "No rainbow to be found!";
  }
}

/////// SOLUTION ///////
