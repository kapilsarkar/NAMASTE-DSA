for (let i = 0; i < 5; i++) {
    console.log("Hello World", + i)
}

for (let i = 0; i <= 5; i++) {
    console.log("Hello Kapil,", + i)
}

for (let i = 3; i < 5; i++) {
    console.log("Hello Sachin", + i)
}

for (let i = 0; i < 6; i++) {
    console.log(i)
}

for (let i = 2; i < 9; i = i + 3) {
    console.log("Hello Virat", + i)
}

for (let i = 5; i > 0; i = i - 1) {
    console.log("Hello Rahul Dravid", + i)
}

for (let i = 5; i < 6; i++) {
    console.log("Hello Dhoni", + 1)
}

function greet(i) {
    console.log("Namaste Kapi Welocme Back to DSA", + i)
}

for (let i = 0; i < 5; i++) {

    greet(i)
}

let arr = [10, 6, 2, 0, 8, 3, 5];

let length = arr.length //7

console.log("Length Of an Array is", length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//Print all the Even Numbers into the console

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log("Even Numbers in the Array are :", arr[i])
    }
}


//Print All the Odd Numbers in the Array;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log("Odd Numbers in the Array are :", arr[i])
    }
}

//While Loop

let j = 0;

while (j < 5) {
    console.log("Hello Welcome Rohit Sharma", + j)
    j++;
}