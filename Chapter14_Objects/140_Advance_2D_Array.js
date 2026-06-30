let matrix = [
    ["Login", "Pass", 200],
    ["Checkout", "Fail", 404],
    ["Search", "Pass", 180]
];



let testCase;
let statusCase;
let statusCode;

// Need only test cases
for (let outerMat = 0; outerMat < matrix.length; outerMat++) {
    for (let innerMat = 0; innerMat < matrix.length; innerMat++) {
        if(outerMat == 0){
            testCase = matrix[innerMat][outerMat];
            console.log(testCase);
        
        }
        if(outerMat == 1){
            statusCase = matrix[innerMat][outerMat];
            console.log(statusCase);
            
        }
        if(outerMat == 2){
            statusCode = matrix[innerMat][outerMat];
            console.log(statusCode);
        }
             
    }
    console.log('--------------------------');
}    

// For of loop

// Only rows
for (const ele of matrix) {
    console.log(ele);
}

// All elements
for (const ele of matrix) {
    for (const innerEle of ele) {
        console.log(innerEle);
    }
}