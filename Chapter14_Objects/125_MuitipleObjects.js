// Three Objects

let obj1 = {
    name : "Rohit"
}

let obj2 = {
    name : "Rohit",
    city : "Aundh"
}

let obj3 = {
    name : "Rohit",
    city : "Aundh",
    state : "Maharashtra"
}

// // 2 Ways of printing object
// console.log(obj3.city);
// console.log(obj2["name"]);

// Step 1 - Assigning obj1 = obj3 --> obj1 have all values in obj3

// console.log(obj1);
obj1 = obj3;
// console.log(obj1);

// Step 2 - I changed data in obj1 will that reflect on obj3?
obj1.city = "Mumbai";
console.log(obj3);

// Step 3 are they perfectly similar?
let ans = obj1 === obj3 ? "Yes" : "no";
console.log(ans);







