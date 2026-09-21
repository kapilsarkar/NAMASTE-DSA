//Write a function to find the second largest number in an array.

let array = [100, 200, 500, 600, 1000, 900, 1200, 1200, 500];

function secondLargestNum(arr) {
    let max = arr[0]; //let us Assume first element in the array be largest
    let secondMax = max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max && max > secondMax) {
             //update the max with the largest value in the array
            secondMax = max
            max = arr[i]
        }
    }

    return secondMax
}

let result = secondLargestNum(array);
console.log(result);