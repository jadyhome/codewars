////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5785cd91a1b8d5c06e000007/train/javascript

// There is a sentence which has a mistake in its ordering.
// The part with a capital letter should be the first word.
// Please build a function for re-ordering

// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'

// >>> re_ordering('Mano donowana')
// 'Mano donowana'

// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'

// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function reOrdering(text) {
  text = text.split(" ");
  let capital = text.filter((c) => c.match(/[A-Z]/g));
  let lowercases = text.filter((l) => !l.match(/[A-Z]/g));

  return capital.concat(lowercases).join(" ");
}

/////// SOLUTION ///////
