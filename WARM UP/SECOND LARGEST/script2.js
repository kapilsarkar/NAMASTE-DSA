//Write a function to find the second largest number in an array.

let array = [10, 20, 50, 60, 100, 100];

function secondLargestNum(arr) {

    if (arr.length < 2) {
        return "Array Should have at least 2 elements";  //If array has less than 2 elements
    }


    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;

}

let result = secondLargestNum(array);
console.log(result);

//Corner Cases : 
//1. Array is Empty
//2. Array has negative numbers
//3. Array has duplicates
