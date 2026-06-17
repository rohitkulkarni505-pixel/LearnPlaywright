// // We can sayv ternary operator is like if - else
// // Syntax : 
// // <datatype> <variable> = <condition> ? "<if part>" : "<else part>"
// let myAge = 18;
// let isMarry = myAge >= 18 ? "Yes" : "No";
// console.log(isMarry);

// console.log("-------------------------------------");


// // Nested ternary operator
// let ageForGoa = 23;
// let ageForDrink = 26;
// let age = 22;

// let goadTrip = age >= ageForGoa ? (age >= ageForDrink ? "Goa Yes - Drink Yes" : "Goa yes - No Drinks") : "No goa";
// console.log(goadTrip);


// Exercise :
let a = 10;
let b = 20;
let c = 30;

let max = a > b ? (a > c ? "A is Greater" : "C is Greater") : (b > c ? "B is Greater" : "C is Greater")
console.log(max);
