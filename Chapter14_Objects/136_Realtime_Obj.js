/*
we are doing 4 tasks in same obj
1. Create simple data
2. Create object in value
3. Create method in value
4. Call method in value
*/

function ageCalculate(birthYear){
    return 2026 - birthYear;
}


const tryObject = {
    name : "Deepak",
    birthYear : 2000,
    add : {
        city :"Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    nickName : function (){
        return "Pintu"
    },
    age : ageCalculate(2000)
}

console.log(tryObject);

// For mickname use like this
console.log(tryObject.nickName());