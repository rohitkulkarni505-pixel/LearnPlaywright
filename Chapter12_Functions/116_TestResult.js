function result(testName, result){
    let res = result();
    return result;
}

function passed(){
    return "This is passed";    
}

function failed(){
    return "This is failed";    
}

result("Login", passed)