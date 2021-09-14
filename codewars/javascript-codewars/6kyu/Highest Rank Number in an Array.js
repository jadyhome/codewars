////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function highestRank(arr) {
  let frequencies = {};

  for (let i = 0; i < arr.length; i++) {
    const h = arr[i];
    if (frequencies.hasOwnProperty(h)) {
      frequencies[h]++;
    } else {
      frequencies[h] = 1;
    }
  }

  let highNum = Object.keys(frequencies).reduce((a, b) =>
    frequencies[a] > frequencies[b] ? a : b
  );

  return Number(highNum);
}

/////// SOLUTION ///////
