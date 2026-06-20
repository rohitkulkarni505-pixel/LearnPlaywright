let a = [1, 2];
let b = [3, 4];
let x = [5, 6];
let y = [7, 8];


// // let c = a + b;
// let c = a.concat(b);
// console.log(c);

// // spread (modern way) - concatenation. (...)
// let d = [...a, ...b];
// console.log(d);



// // Join 
// let s = ["pass", "fail", "skip"].join("|");
// console.log(s);


let ans = [...x, ...y];
console.log(ans);
let ansNew = ans.join("-->");
console.log(ansNew);
console.log(ans );
