// Iterate - Go from one to another. // 


//------------------------------
//   With For Loop
//------------------------------
let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

//------------------------------
//   With for ... of loop
//------------------------------

// for...of (cleanest for values)
for (test of tests) {
    console.log(test);
}

console.log("----");

//------------------------------
//   With for ... each loop
//------------------------------

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");


//------------------------------
//   With for ... in loop
//------------------------------

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");



for (let [i, test] of tests.entries()) {
    console.log(i, test);
}