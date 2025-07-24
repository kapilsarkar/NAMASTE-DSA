//Arrays

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k. To get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important, as well as the size of nums. eturn k.

var RemoveDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1
}
const result = [0,0,1,1,1,2,2,3,3,4]
const uniqueCount = RemoveDuplicates(result);

console.log(`The number of Unique Elements in the array is ${uniqueCount} and the Array is ${result}`);