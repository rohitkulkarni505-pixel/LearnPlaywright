// Normal Fucntion :
function statusNormal (statusCode1){
    if(statusCode1 >= 200 && statusCode1 <= 300){
        console.log("Request is fine");
    }
    else{
        console.log("Problem is in Request");
        
    }
}
statusNormal(201);

// Expression Fucntion :
const statusExpress = function (statusCode2){
    if(statusCode1 >= 200 && statusCode1 <= 300){
        console.log("Request is fine");
    }
    else{
        console.log("Problem is in Request");
        
    }
}
statusNormal(301);

// Arrow Fucntion :
const statusArrow = (statusCode2)=>{
    if(statusCode2 >= 200 && statusCode2 <= 300){
        console.log("Request is fine");
    }
    else{
        console.log("Problem is in Request");
        
    }
}
statusArrow(222);