// Adding function in object

const funObj = {
    name : "Rakesh",
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    }
}

let ans = funObj.add(12, 15);
console.log(ans);

ans = funObj.sub(20, 15);
console.log(ans);


// 1. While adding we don't have to give key : value formate