// Check are both same ?

let ob1 = {
    lang : 50,
    sci : 70,
    math : 80
};

let ob2 = {
    lang : 50,
    sci : 70,
    math : 80
}; 

let ans = ob1 === ob2 ? "Yes" : "No";
console.log(ans);
ob1 = ob2;
ans = ob1 === ob2 ? "Yes" : "No";
console.log(ans);

// Let try with variable

 let a = 10;
let b = 10;

console.log(a === b);