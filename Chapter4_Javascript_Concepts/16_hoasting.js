// Hoisting is JavaScript's default behavior of moving variable and function
// DECLARATIONS to the top of their containing scope during the 
// compilation phase, BEFORE the code is actually executed.


// You are printing variable which is not yet defined
console.log(thisVariable); // Step 1
thisVariable = "Namaste";  // Step 2
console.log(thisVariable); // Step 4 



// Delaraing var 
var thisVariable; // Step 3

// Step 1 : If you are calling S3 is below S1 and S2 at that time
// S1 --> Undefined (Becz S3 is avalible in program)
// S2 --> value updated
// S4 --> Recently uopdated value print

// Is this happen to let? 


