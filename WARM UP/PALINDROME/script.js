//check a Number is Palindrome or not

//To find the last digit of a number : n % 10;
//To remove the remove the last digit of a number : n/10




function checkNumPalindrome(n) {
    if (n < 0) {
        return false;
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
        return false
    }
}

let n = 121
let m = 12121
let o = -121
console.log(checkNumPalindrome(n))
console.log(checkNumPalindrome(m))
console.log(checkNumPalindrome(o))