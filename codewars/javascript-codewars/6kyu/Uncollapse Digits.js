////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c/train/javascript

// Task
// You will be given a string of English digits "stuck" together, like this:

// "zeronineoneoneeighttwoseventhreesixfourtwofive"

// Your task is to split the string into separate digits:

// "zero nine one one eight two seven three six four two five"

// Examples
// "three"              -->  "three"
// "eightsix"           -->  "eight six"
// "fivefourseven"      -->  "five four seven"
// "ninethreesixthree"  -->  "nine three six three"
// "fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function uncollapse(digits) {
  return digits
    .replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, "$& ")
    .trim();
}

/////// SOLUTION ///////
