////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/555a7dc335d4c407af00006e/train/javascript

// Tea for two!

// Given a string or number write a function tea42 that takes as input a string
// or number and returns a string where every '2' character or digit has been replaced with a t.

// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function tea42(input) {
  if (typeof input === "number") { // if typeof input is a number
    return input.toString().replace(/[2]/g, "t"); 
    // we return a string after turning the input into a string -- using toString()
    // using replace() method and regex to replace all characters or digits that has '2'
    // and replacing it with a t
  }
  
  if (typeof input === "string") { // if typeof input is a string
    return input.replace(/[2]/g, "t");
    // using the replace() method and regex
    // we return a string after replacing all characters that has '2' and replace it with a t
  }
}

/////// SOLUTION ///////
