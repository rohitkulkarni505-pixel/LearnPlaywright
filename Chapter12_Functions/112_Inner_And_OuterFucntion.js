// Here I am creating inner and outer function

function outerFun(){
    let a = "This is from outer";
    console.log("OUTER :"+a);
    
    function innerFun(){
        let b = "This is inner"
        console.log(b);
        console.log(a);
        
    }
//     console.log("OUTER :"+b);  --> We can't call variable from inner function in outer
}

outerFun();
// innerFun(); --> Error
// This means we can call outer variable in inner function but we can't call inner variables to outer
// Also we can't call inner function directly