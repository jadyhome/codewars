////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/525821ce8e7b0d240b002615/train/javascript

// You must create a method that can convert a string from any format into PascalCase.
// This must support symbols too.

// Don't presume the separators too much or you could be surprised.

// For example: (Input --> Output)

// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function camelize(str) {
  str = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .trim()
    .split(" ");
  let pascal = str.map((l) => l.charAt(0).toUpperCase() + l.slice(1));

  return pascal.join("");
}

/////// SOLUTION ///////
