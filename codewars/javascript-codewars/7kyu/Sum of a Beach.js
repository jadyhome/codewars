////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript

// Beaches are filled with sand, water, fish, and sun.
// Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun"
// appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function sumOfABeach(beach) {
  beach = beach.match(/(sand)|(water)|(fish)|(sun)/gi);

  if (beach === null) {
    return 0;
  } else {
    return beach.length;
  }
}

/////// SOLUTION ///////
