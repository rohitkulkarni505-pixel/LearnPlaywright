let tdz = 10;

// function getMyFunction(){
//     console.log(myCode);
//     let myCode = 6273;
//     console.log(myCode);
// }

// // This is throwing error 
// getMyFunction();

// Function
function getMyFunctionthis(){

    // TDX for 'tdz' start here 
    // console.log("Function Start");  // Refrence error
    console.log(tdz);
    console.log("TDZ again ini");
    let tdz = 50;
    console.log(tdz);
}

getMyFunctionthis();