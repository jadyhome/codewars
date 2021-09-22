////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript

// Some new cashiers started to work at your restaurant.
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function getOrder(input) {
  input = input
    .replace(
      /burger|fries|chicken|pizza|sandwich|onionrings|milkshake|coke/g,
      "$& "
    )
    .trim();

  let cleaned = input
    .split(" ")
    .map((order) => order.slice(0, 1).toUpperCase() + order.slice(1));

  let menuItems = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];

  let fixedOrders = cleaned.sort(
    (a, b) => menuItems.indexOf(a) - menuItems.indexOf(b)
  );

  return fixedOrders.join(" ");
}

/////// SOLUTION ///////
