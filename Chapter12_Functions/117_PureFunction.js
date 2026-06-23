// Pure function means what ever tyep of datawe are passing we are getting same data

let ans;

function addition(a, b){
    return a+b;
}
ans = addition(10, 15)
console.log(ans);
// Here we are passsing data in int and getting data in int so this is pure fucntion


function licence (c){

    let ret = c > 18 ? "Can have" : "Can't have"
    return ret; 
}
ans = licence(21);
console.log(ans);
// Here we are not getting the int data so this is impure function

// As per chatgpt when we are incrementing or changing value in between function then that is impure function
// A function is impure if it depends on or modifies external state. - Chatgpt