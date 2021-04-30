////////////////////////////////////////////////////////////////////////
// PROMPT
// https://www.codewars.com/kata/5701e43f86306a615c001868/train/javascript

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number.
// If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |

// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
////////////////////////////////////////////////////////////////////////


/////// SOLUTION ///////

function getIssuer(number) {
  number = number.toString();

  if (
    (number.slice(0, 2) === "34" && number.length === 15) ||
    (number.slice(0, 2) === "37" && number.length === 15)
  ) {
    return "AMEX";
  } else if (
    (number.charAt(0) === "4" && number.length === 13) ||
    (number.charAt(0) === "4" && number.length === 16)
  ) {
    return "VISA";
  } else if (
    (number.slice(0, 2) === "51" && number.length === 16) ||
    (number.slice(0, 2) === "52" && number.length === 16) ||
    (number.slice(0, 2) === "53" && number.length === 16) ||
    (number.slice(0, 2) === "54" && number.length === 16) ||
    (number.slice(0, 2) === "55" && number.length === 16)
  ) {
    return "Mastercard";
  } else if (number.slice(0, 4) === "6011" && number.length === 16) {
    return "Discover";
  } else {
    return "Unknown";
  }
}

/////// SOLUTION ///////
