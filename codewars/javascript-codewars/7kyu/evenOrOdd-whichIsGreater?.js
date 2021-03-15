////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

// Given a string of digits confirm whether the sum of all the individual even digits are greater than
// the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function evenOrOdd(str) {
  let numArr = str.split("").map(Number)
  // split() method to split the string into individual strings
  // map() method and Number function to map through the array and turn the strings into integers

  let evens = numArr.filter((e) => e % 2 === 0) // filter() method to filter out just even integers from 'numArr'
  let odds = numArr.filter((o) => o % 2 === 1) // filter() method to filter out just odd integers from 'numArr'

  let sumOfEvens = evens.reduce((a, b) => a + b) // reduce() method to add all the even integers together
  let sumOfOdds = odds.reduce((c, d) => c + d) // reduce() method to add all the odd integers together 

  if (sumOfEvens > sumOfOdds) { // if 'sumOfEvens' is greater than 'sumOfOdds'
    return "Even is greater than Odd" // we return the string -- "Even is greater than Odd"
  } else if (sumOfEvens < sumOfOdds) { // else if 'sumOfEvens' is less than 'sumOfOdds'
    return "Odd is greater than Even" // we return the string -- "Odd is greater than Even"
  } else {
    return "Even and Odd are the same" // else, we return the string -- "Even and Odd are the same"
  }
}

/////// SOLUTION ///////
