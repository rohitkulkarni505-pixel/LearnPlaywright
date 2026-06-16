// Same as let

const a = 10;
if (true){
    console.log(a);
   const a = 20;
   console.log(a);
}
// 4 and 5 if not there then it will run for sure after adding those will throw error

// TDZ area
console.log(nowData);
// ------ TDZ for nowData Started on line 10
console.log("Hello");
console.log("Hi");
console.log("Namaste");
console.log("Heyya");
// ------ TDZ for nowData ends on 16 line
const nowData = 20;

// For TDZ area here we will get error



