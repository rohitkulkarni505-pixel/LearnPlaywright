var num4 = 10;


// Defining a function
function printNow(){
    console.log("Hello User");
    var num4 = 20 // Local Scope 
        if (true) {
            var num4 = 30;
        }
// Printing num4 : Expetcted as per standard coding practice
// --> Should come wti value 20;
console.log("Inside Function : ", num4);
}



// Calling Function
printNow();

console.log("Outside Function : ", num4);



