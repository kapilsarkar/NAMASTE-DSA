function printHelloWorld() {
    console.log("Hello World")
}

printHelloWorld();

function greet(name) {
    console.log("Namaste," + name);
}

greet("Kapil");
greet("Akshay");

let x = "Virat Kohli";
greet(x);

//Creating a Function that add two numbers

function add(a, b) {
    let c = a + b;
    console.log("Addition of Two Numbers:", c);
}

add(10, 5);

//Creating a multiplication function of two numbers

function multiply(a, b) {
    let c = a * b;
    console.log("Multiplicatiion of two numbers:", c);
}

multiply(10, 20);

//Square of function

function square(x) {
    let result = x * x;

    return result;
}

let squareResult = square(5);

console.log(squareResult);

let z = square(10);
console.log(z);

//Create a Function which accepts the age and tells whether the person is eligible to vote or not;

function votingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible For Voting");
    }
    else if (age <= 0) {
        console.log("Invalid age");
    }
    else {
        console.log("Not Eligible for Vote");
    }
}

votingEligibility(20);
votingEligibility(10);
votingEligibility(-1);

//Create a Function to check if a number is Even Or odd

function oddEven(n) {
    // if (n % 2 === 0) {
    //     console.log("Even Number");
    // }

    // else {
    //     console.log("Odd Number");
    // }

    let rem = n % 2;
    if (rem === 0) {
        console.log("Even Number")
    }
    else {
        console.log("Odd Number");
    }
}

oddEven(10);
oddEven(11);


