// Creating Arrays / Array Literal (preferred)

let browsers = ["Chrome", "Firefox", "Safari"];

// Array Constructor

let scores = new Array(3);
let scores2 = new Array(1, 2, 3);

console.log(scores);
console.log(scores2);

// Array.of
let offTheArray = Array.of(11,12,13)
console.log(offTheArray);


// Array.from() --. Mostly we use with char
let prinrString = Array.from("ThisIsArra")
console.log(prinrString);



// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
// console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);