////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/52c7c425f80c299ac60003df/train/javascript

// Create a function, which escapes all HTML markup of a given string.
// Replacing entities of special characters is not needed.

// Examples say more than words:

// var strEscaped = escapeHTML('<p>Lorem ipsum dolor sit amet.</p>');
// &lt;p&gt;Lorem ipsum dolor sit amet&lt;/p&gt;

// var strEscaped = escapeHTML('This text has <strong>bold</strong> markup.');
// This text has &lt;strong&gt;bold&lt;/strong&gt; markup.

// Watch carefully all test fixtures. If you pass all four of them, you have solved it. :-]

// If you need a good online regular expression tester: http://regex101.com/#javascript
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

var escapeHTML = function (str) {
  let changedMarkup = str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
    
  return changedMarkup;
};

/////// SOLUTION ///////
