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
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < 0) {
            return arr2.length
        }
    }
}

let result2 = countNegativeNumber(arr2)
console.log(result2)

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