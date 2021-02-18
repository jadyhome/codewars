////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript

// Simple enough this one - you will be given an array. 
// The values in the array will either be numbers or strings, or a mix of both. 
// You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, 
// followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function dbSort(a) {
  let nums = a.filter((n) => typeof n === "number")
  // using filter() method -- creates a new array with all the elements that matches with the typeof "number"

  let strings = a.filter((s) => typeof s === "string")
  // using filter() method -- creates a new array with all the elements that matches with the typeof "string"

  let sortedNums = nums.sort((a, b) => a - b)
  // with the sort() method, we sort the numbers from the filtered array in ascending order

  let sortedStrings = strings.sort()
  // with the sort() method, we sort the strings from the filtered array in alphabetical order

  const doubleSorted = sortedNums.concat(sortedStrings)
  // and using the concat() method to merge both arrays together into one new array

  return doubleSorted // returning the final array with both numbers and strings sorted
}

/////// SOLUTION ///////
