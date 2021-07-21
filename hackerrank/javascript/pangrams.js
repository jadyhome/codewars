// https://www.hackerrank.com/challenges/pangrams/problem


/////// SOLUTION ///////

function pangrams(s) {
    s = s.toLowerCase()
         .replace(/[ ]/g, "")
         .split("")
         .sort()
    let pan = "abcdefghijklmnopqrstuvwxyz"
    let checkIfPan = s.filter((extra,index) => s.indexOf(extra) === index).join("")

    if ( checkIfPan === pan ) { return "pangram" }
    else { return "not pangram" }
}

/////// SOLUTION ///////
