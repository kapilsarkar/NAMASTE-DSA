//Write a function to find the second largest number in an array.

let newArray = [100, 200, 500, 600, 1000, 900, 1200,1200,500];

function secondLargest(arr) {
    if (newArray.length < 2) {
        return null;     //If array has less than 2 elements
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let result = secondLargest(newArray);
console.log(result);
