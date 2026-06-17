let a = 10;
let b = 50;
let c = 30;

let max = a > b ? 
        (a > c ? "A is Greater" : "C is Greater") : 
        (b > c ? "B is Greater" : "C is Greater")

console.log(max);