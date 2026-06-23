// Taking outer and inner function

function outer(){
    let num1 = 100;
    console.log("OUTER START -->");
    let point1 = "Variable from outer"

    function inner(){
        console.log("INNER START -->");
        let point1 = "Variable from inner"
        


        console.log("INNER STOP -->");
    }
   
    console.log("OUTER STOP -->");
    return inner();
}

let callFun = outer;
callFun();

/*
    // Returning the inner function itself (not executing it).
    // This allows the inner function to be called later and
    // still access variables from the outer function (Closure).
*/