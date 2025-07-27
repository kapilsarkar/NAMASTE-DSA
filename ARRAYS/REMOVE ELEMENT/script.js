// Problem Statement:

// Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.


// Consider the number of elements in nums which are not equal to val be k. To get accepted, you need to:

// Modify nums such that the first k elements contain elements not equal to val. The remaining elements beyond k do not matter. Return k.

var RemoveElement = function (nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        //Shift element s to left if not equal to val
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1
        }
    }
    return x;
}

let result = [3, 2, 1, 5, 3, 4, 8, 3];
let removeElement = RemoveElement(result, 3)
console.log(`The number of removed elements is ${result.length - removeElement}`);
console.log(`The new array is: ${result.slice(0, removeElement)}`);