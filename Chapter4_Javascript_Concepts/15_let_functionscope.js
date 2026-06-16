let num4 = 10;


// Defining a function
function printNow(){
    console.log("Hello User");
    let num4 = 20 // Local Scope 
        if (true) {
            let num4 = 30;
        }
// Printing num4 : Expetcted as per standard coding practice
// --> Should come wti value 20; In let case that is happining
console.log("Inside Function : ", num4);
}



// Calling Function
printNow();

console.log("Outside Function : ", num4);



