////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

// Given a sequence of integers, return the sum of all the integers that have an even index,
// multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function evenLast(numbers) {
  let evenIndex = numbers.filter((a, b) => b % 2 === 0)
  // filter() method to filter out a new array with just the even indices

  let lastIndex = numbers[numbers.length - 1]
  // the array count starts at 0
  // using the length property, we can get the last item by '-1' to the length of the array

  let sum = 0 // initializing a variable to keep count of the sum of just the even indices

  // using a for loop, we iterate through the array of the evenIndex
  for (let i = 0; i < evenIndex.length; i++) {
    sum += evenIndex[i] // adding the values of 'i' in the evenIndex array to the sum variable
  }

  if (sum == []) { // if there is an empty array, we return 0
    return 0
  } else { // else we return the final integer of sum * lastIndex
    return sum * lastIndex
  }
}

/////// SOLUTION ///////
