// Defined function with default parameter
function defaultTry(number, mul=5, add=5){
    let ans = number * mul + add;
    console.log(`Answer is ${ans}`);  
}

// Calling function with default parameter
defaultTry(2);

// Calling function with own parameter (Not default)
defaultTry(3,4,1)