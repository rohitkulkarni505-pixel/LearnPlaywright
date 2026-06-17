// Even Odd 
let number = 7;

if(number % 2 === 0) {
    console.log("Even");

} else {
    console.log("Odd");
}

// Grade Calc
let marks = 85;

if(marks >= 90) {
    console.log("Grade A");
} else if(marks >= 80) {
    console.log("Grade B");
} else if(marks >= 70) {
    console.log("Grade C");
} else if(marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// Leap Year calculation
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}