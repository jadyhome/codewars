////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/javascript

// You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

// "1000.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10"

// The first line shows the original balance.
// Each other line (when not blank) gives information: check number, category, check amount.
// (Input form may change depending on the language).

// First you have to clean the lines keeping only letters, digits, dots and spaces.

// Then return a report as a string (underscores show spaces -- don't put them in your solution.
// They are there so you can see them and how many of them you need to have):

// "Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65"

// On each line of the report you have to add the new balance
// and then in the last two lines the total expense and the average expense.
// So as not to have a too long result string we don't ask for a properly formatted result.

// Notes
// See input examples in Sample Tests.
// It may happen that one (or more) line(s) is (are) blank.
// Round to 2 decimals your results.
// The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
// R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function balance(book) {
  // Please use .toFixed(2) to format numbers

  book = book
    .replace(/[^\s\.0-9a-zA-Z]/g, "")
    .split("\n")
    .filter((s) => s !== "");
  // console.log("BOOK:\n", book)

  let originalBalance = Number(book[0]).toFixed(2);
  // console.log("ORIGINAL BALANCE:", originalBalance)

  let expenses = book
    .map((x) => x.split(" ")[2])
    .filter((y) => y !== undefined);
  expenses = expenses.map((f) => Number(f).toFixed(2));
  // console.log("EXPENSES:", expenses);

  let newBalance = [];
  for (let i = 0; i < expenses.length; i++) {
    newBalance.push((originalBalance -= expenses[i]).toFixed(2));
  }
  // console.log("NEW BALANCE:", newBalance)

  let totalExpenses = expenses
    .map((e) => Number(e))
    .reduce((a, b) => a + b)
    .toFixed(2);
  // console.log("TOTAL:", totalExpenses)

  let avgExpense = (totalExpenses / expenses.length).toFixed(2);
  // console.log("AVERAGE:", avgExpense)

  let addedBalances = book.slice(1).map((b) => b.split(" "));
  addedBalances = addedBalances.map(
    (x, i) =>
      x[0] + " " + x[1] + " " + `${expenses[i]}` + ` Balance ${newBalance[i]}`
  );
  // console.log("ADDED BALANCES:\n", addedBalances);

  let balancedBook = [
    `Original Balance: ${(book[0] * 1).toFixed(2)}`,
    ...addedBalances,
    `Total expense  ${totalExpenses}`,
    `Average expense  ${avgExpense}`,
  ].join(`\r\n`);
  // console.log("BALANCED:\n", balancedBook);

  return balancedBook;
}

/////// SOLUTION ///////
