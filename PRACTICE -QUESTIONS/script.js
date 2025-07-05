//1.Write a Function that returns the count of digits in a number

function checkCount(n) {
    if (n == 0) return 1;
    let count = 0;
    n = Math.abs(n);
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

const checkCountResult = checkCount(12);
console.log(checkCountResult);

//2.Write a Function that checks if a number is a palindrome or not


var palindromeResult = function (n) {
    if (n < 0) {
        return false
    }
    let original = n;
    let rev = 0;
    while (n > 0) {
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    if (rev === original) {
        return true
    }
    else {
        return false;
    }
}

console.log(palindromeResult(121));