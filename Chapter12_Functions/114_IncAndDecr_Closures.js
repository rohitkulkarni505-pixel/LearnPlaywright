// We are going to make code where we can increment and decrement a variable by internal method

function number(arg1 = 5){

    let num = arg1;
    return{
        incre(){ return arg1++ },
        decre(){ return arg1-- },
        get() { return console.log(arg1);}
    }
}

let takeControl = number()
takeControl.incre();
takeControl.get();