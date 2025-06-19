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

let mixedArray = [2, 9, -7, -10, 20, 50, -200, 36, -55, -90, 65];

function checkNegativeNumber(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}



let negativeResult = checkNegativeNumber(mixedArray);
console.log(negativeResult);

//Write a function that return the largest number in an array

let largestArray = [5, 10, 200, 500, 20, 29, 50];

function checkLargestNumInArray(arr) {

    let max = arr[0]; //let us Assume first element in the array be largest
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; //update the max with the largest value in the array
        }
    }
    return max;
}

let resultLargest = checkLargestNumInArray(largestArray);
console.log(resultLargest);

//Write a function that return the smallest number in an array.

let smallestArray = [5, 10, 200, 500, 20, 29, 50];

function checkSmallNumInArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

let resultSmallest = checkSmallNumInArray(smallestArray);
console.log(resultSmallest);