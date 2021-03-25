////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript

// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford.
// The prices in this string are to be sorted in ascending order.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function search(budget, prices) {
  let coffeeBudget = prices.filter((b) => b <= budget);
  // filter() method -- filter out the prices where the value is less than or equal to the budget provided

  return coffeeBudget.sort((a, b) => a - b).toString();
  // returning the budget after sorting the array of prices from ascending order
  // and using toString() method to change the array to a string of prices
}

/////// SOLUTION ///////
