// // Normal Functions :
// function greet(name){
//     return "Good Morning "+name;
// } 

// // Function Calling
// greet("Rohit");
// console.log(greet("Rohan"));

// // Here we are doing following 3 things which we are going to skip
// /*
// 1. 'return' keyword
// 2. 'function' keyword
// 3. Curly braces 
// */

// Arrow functions

// Function Define
const addition = (para1, para2) => para1 + para2;

// Function Calling
let result = addition(20, 30)
console.log(result);

// Not passing data and returning value 
const noDataRet = () => "Hi this is arrow function without parameter"
console.log(noDataRet());

// Arrow function -> No para | String pass
const stringRet = () => {
    console.log("This is first statement");
    console.log("This is Second statement");
    console.log("This is third statement");
}
stringRet();

// Arrow Function -> Multiple Lines | With Para | With return  
const additionNow = para1 => {
    var ans = para1 + 5;
    return ans;
    
}
console.log(additionNow(11, 22));
 

