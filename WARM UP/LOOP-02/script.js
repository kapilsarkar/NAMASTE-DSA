//Write a Function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [2, 4, 5, 0, 8, 30, 10, 25, 9];

function searchElement(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}
console.log(searchElement(arr, 5));
console.log(searchElement(arr, 90));
