////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/train/javascript

// Create function that takes one positive three digit integer
// and rearranges its digits to get maximum possible number.
// Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

// maxRedigit(123); // returns 321
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

const maxRedigit = (num) => {
  let numToArray = num.toString().split("") 
  // Here we create a variable called "numToArray"
  // We use the .toString() method and .split() method
  // that will change the num arguments into a string and split it in an array

  let sortedArray = numToArray.sort((a, b) => a - b)
  // We take the "numToArray" variable that has been changed into an array of strings 
  // and sort them in ascending order and assign it the "sortedArray" variable

  let reversedArray = sortedArray.reverse()
  // We make a new variable called "reversedArray" 
  // and use the .reverse() method to flip the array of strings from the "sortedArray"
  
  let newNums = parseInt(reversedArray.join(""))
  // Here we make a new variable called "newNums" 
  // and use the .join() method to join all the strings together in the "reversedArray"
  // and lastly, use the parseInt() to change the joined string back into integers


  // We don't want any integers greater than 3 digits – so we will use conditional statements:
  
  if (num <= 100) { // if the num argument is less than or equal to 100; return null
    return null
  } else if (num >= 1000) { // else if the num argument is greater than or equal to 1000; return null
    return null
  } else { // else; we return the newNums variable that has the solved answer
    return newNums
  }
}

/////// SOLUTION ///////
