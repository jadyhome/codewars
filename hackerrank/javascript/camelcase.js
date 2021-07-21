// https://www.hackerrank.com/challenges/camelcase/problem


/////// SOLUTION ///////

function camelcase(s) {
    let numOfWords = s.match(/[A-Z]*[^A-Z]+/g)
    return numOfWords.length
}

/////// SOLUTION ///////
