// Destructuring Object


// Creating Object
// const objStu = {
//     rollNo : 121,
//     stuName : 'Rahul',
//     fatherName : 'Gangaram',
//     surName : 'Chaudhari'
// }

// // printing values with this formate -> <ObjName>.<Key>
// console.log(objStu.rollNo);
// console.log(objStu.name);
// console.log(objStu.fatherName);
// console.log(objStu.surName);

// Now I am destructuring object with names
// For Now I don't want to write objStu.rollNo for rollNo I want to say just rollNo
// and also for other like this only

// let {stuRollno, stuName, stuFatherName, stuSurName} = objStu;
// console.log(rollNo); // undefined
// console.log(stuName); // undefined
// console.log(fatherName); // undefined
// console.log(surName); // undefined

// This is coming as undefined because the variable names in destructuring must match the object's property names.
// let {rollNo, stuName, fatherName, surName} = objStu;
// console.log(rollNo); // 121
// console.log(stuName); // Rahul
// console.log(fatherName); // Gangaram
// console.log(surName); // Chaudhari
// console.log("-------------------");

// Also you can destructure only one time


// With function
// lets say you have function by which you are printing all values

// Creating Object
const objStu = {
    rollNo : 121,
    stuName : 'Rahul',
    fatherName : 'Gangaram',
    surName : 'Chaudhari'
}

// Old Way
function oldCall (obj){
    console.log(obj.rollNo);
    console.log(obj.stuName);
    console.log(obj.fatherName);
    console.log(obj.surName);
}
oldCall(objStu);

function newCall({rollNo, stuName}){  // this will internally like {rollNo, stuName}=objStu
    console.log(rollNo);
    console.log(stuName);
}
newCall(objStu);

// Other thing -> You can also destructure linke thiss
const user = {clinetName : "Ab", age : 20}
const {clinetName : userName, age : userAge} = user;
console.log(user.clinetName);
console.log(user.age);
console.log(userName);
console.log(userAge);

// Nested or Iner Object
const objLevel1 = {
    objLevel2 : {
        objLevel3 :{
            objLevel4 : "Print Me"
        }
    }
}
let ans = objLevel1.objLevel2.objLevel3.objLevel4;
console.log(ans);


