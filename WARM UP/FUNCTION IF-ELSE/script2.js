function printHelloWorld() {
    console.log("Hello world");
}

printHelloWorld();

function greet(name) {
    console.log("Namaste :" + " " + name);
}

let x = "Sachin Tendulkar"
greet("Kapil Sarkar");
greet("Virat Kohli");
greet(x);

function sum(a, b) {
    console.log("Addition Of Two Numbers :", a + b);
}

sum(10, 10);

function multiply(a, b) {
    let mul = a * b;
    console.log("Multiplication Of two Numbers :", mul);
}

multiply(10, 20);

function Square(x) {
    let result = x * x;

    return result;
}

let SquareResult = Square(23);
console.log("Square Of a Number :", SquareResult);

function VotingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to Vote")
    }

    else if (age <= 0) {
        console.log("Invalid Input")
    }
    else {
        console.log("Not eligible to Vote")
    }
}

VotingEligibility(18);
VotingEligibility(20);
VotingEligibility(16);
VotingEligibility(-1);
VotingEligibility(0);

function CheckEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("Even Number")
    }
    else {
        console.log("Odd Number")
    }
}

CheckEvenOrOdd(20);
CheckEvenOrOdd(15);