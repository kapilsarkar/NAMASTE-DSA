//Star-Pattern -1

//  *****
//  *****
//  *****
//  *****
//  *****

let n = 5
for (let i = 0; i < n; i++) {
    let row = " "
    for (let j = 0; j < n; j++) {
        row = row + "*";
    }
    console.log(row);
}

//  i represents the row number (since it controls how many lines are printed).
//  j represents the column number (since it controls how many * are added in one row).

//Star-Pattern -2

//  *
//  **
//  ***
//  ****
//  *****

for (let i = 0; i < 5; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row = row + "*";
    }

    console.log(row);
}

//Star-Pattern -3

//  1
//  12
//  123
//  1234
//  12345


for (let i = 0; i < 5; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1)
    }
    console.log(row);
}

//Star-Pattern -4

//  1
//  22
//  333
//  4444
//  55555

for (let i = 1; i <= 5; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = row + i;
    }
    console.log(row);
}

//Star-Pattern -5

// 12345
// 1234
// 123
// 12
// 1

let a = 5;
for (let i = 0; i < a; i++) {
    let row = "";
    for (let j = 0; j < a - i; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}

//Star-Pattern -6

// *****
// ****
// ***
// **
// *

let b = 5
for (let i = 0; i < b; i++) {
    let row = "";
    for (let j = 0; j < b - i; j++) {
        row = row + "*"
    }
    console.log(row);
}

//Star-Pattern -7

//     *
//    **
//   ***
//  ****
// *****

let c = 5;

for (let i = 0; i < c; i++) {
    let row = "";
    for (let j = 0; j < c - (i + 1); j++) {
        row = row + " "
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*";
    }
    console.log(row);
}
// j is adding empty spaces
// k is adding stars

//Star-Pattern -8

// 1
// 10
// 101
// 1010
// 10101

let d = 5;


for (let i = 0; i < d; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1;
        }
    }
    console.log(row);
}

//Star-Pattern -9

// 1
// 01
// 010
// 1010
// 10101



let e = 5;
let toggle = 1;
for (let i = 0; i < e; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1;
        }
    }
    console.log(row);
}






