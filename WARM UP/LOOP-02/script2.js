//Write a Function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [2, 4, 5, 0, 8, 30, 10, 25, 9];

function searchElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i
        }
    }
    return - 1
}

let result = searchElement(arr, 10)
console.log(result)
console.log(searchElement(arr, 60))

//Write a function that returns the number of negative numbers in an array

let arr2 = [10, 20, -2, -10, -6, 50]


function countNegativeNumber(arr2) {
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < 0) {
            count = count + 1
        }
    }
    return count
}

console.log(countNegativeNumber(arr2))

//Write a function that return the largest number in an array

let largestArray = [5, 10, 200, 500, 20, 29, 50];

function checkLargestNumberInArray(largestArray) {

    
    let largerNum = 0
    
    for (let i = 0; i < largestArray.length; i++) {
        if (largestArray[i] > largerNum) {
            largerNum = largestArray[i]
        }
    }
    return largerNum
}

console.log(checkLargestNumberInArray(largestArray))