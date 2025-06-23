//Double Loop - 1
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i = " + i + "j = " + j);
    }
}
console.log("*************");
//Double Loop - 2

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("i =" + i + "j = " + j);
    }
}

console.log("*************");

//Double Loop - 3
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i =" + i + "j = " + j)
    }
}

console.log("*************");

//Double Loop - 4

for (let i = 0; i < 3; i++) {
    for (j = i; j > 0; j--) {
        console.log("i =" + i + "j = " + j);
    }
}

console.log("*************");

//Double Loop - 5

for (let i = 0; i < 3; i++) {
    for (j = i; j >= 0; j--) {
        console.log("i =" + i + "j = " + j);
    }
}

console.log("*************");

//Double Loop - 6

for (let i = 5; i > 0; i--) {
    for (j = 0; j < i; j++) {
        console.log("i =" + i + "j = " + j);
    }
} 