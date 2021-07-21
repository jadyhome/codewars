// https://www.hackerrank.com/challenges/find-digits/problem


/////// SOLUTION ///////

function findDigits(n) {
    let num = n.toString().split("")
    let divisors = []
    
    for ( let i = 0; i < num.length; i++ ) {
        if ( n % (num[i]*1) === 0 ) {
            divisors.push(i)
        }
    }
    return divisors.length
}

/////// SOLUTION ///////
