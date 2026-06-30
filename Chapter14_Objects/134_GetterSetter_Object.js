// Getter setter method in object are as follows.



const ob1 ={
    name : "Sunil",
    age : 28,
    // Getter
    get fullName(){
        return this.name;
    },
    //setter
    set fullName(value){
        this.name = value;
    }
}
console.log(ob1.fullName); // this can access like property not method so no '()'
ob1.fullName="Rohit";
console.log(ob1.name);