////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function removeUrlAnchor(url) {
  url = url.split("#");
  return url[0];
}

/////// SOLUTION ///////
