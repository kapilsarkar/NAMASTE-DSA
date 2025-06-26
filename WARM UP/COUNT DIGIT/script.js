//Write a Function that return the count of digits in a number.



function countDigit(n) {
    if (n == 0) return 1;
    let count = 0; //For Handling Zero.
    n = Math.abs(n) //For Handling Negative Number.
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

let result = countDigit(278907589);
console.log(result);