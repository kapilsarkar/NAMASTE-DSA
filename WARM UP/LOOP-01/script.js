for (let i = 0; i <= 2; i++) {
    console.log("Hello World", + i);
}

for (let i = 3; i < 5; i++) {
    console.log("Namaste Kapil", + i);
}

for (let i = 1; i <= 5; i++) {
    console.log(i + 1);
}

for (let i = 2; i < 9; i = i + 3) {
    console.log("Hello Kapil Sarkar", + i);
}

for (let i = 5; i > 0; i--) {
    console.log("Hello Piku", +i);
}

for (let i = 5; i < 4; i++) {
    console.log("Hello World");
}

//Infinite Loop

// for(let i =1; i >0; i++){
//     console.log(i);
// }
function greet(i) {
    console.log("Namaste India", + i);
}

for (let i = 0; i <= 10; i++) {
    greet(i);
}


let arr = [10, 6, 2, 0, 8, 3, 5];

let length = arr.length;

console.log(length);

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

//Print All the Even Numbers in the Array;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log("Even Numbers in an Array are:", + arr[i]);
    }
}

//Print All the Odd Numbers in the Array;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log("Odd Numbers in an Array are:", + arr[i]);
    }
}

//While Loop

let j = 0;

while (j < 5) {

    //this is body of loop
    console.log(j);
    j++;
}