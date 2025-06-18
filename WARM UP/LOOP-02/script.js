//Write a Function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [2, 4, 5, 0, 8, 30, 10, 25, 9];

function searchElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}
console.log(searchElement(arr, 5));
console.log(searchElement(arr, 90));

//Write a function that returns the number of negative numbers in an array

let mixedArray = [2, 9, -7, -10, 20, 50, -200, 36, -55,-90,65];

function checkNegativeNumber(arr) {
    let count = 0;
    for (let i = 0; i < mixedArray.length; i++) {
        if (mixedArray[i] < 0) {
            count++;
        }
    }
    return count;
}



let negativeResult = checkNegativeNumber(mixedArray);
console.log(negativeResult);