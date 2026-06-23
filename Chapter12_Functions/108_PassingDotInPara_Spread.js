// Here we are passing '...' before parameter also known as spread

// Function
function spreadTry(...num){
    console.log("This is number 1 : "+num[1]);
    console.log("This is number 2 : "+num[2]);
    console.log("This is number 3 : "+num[3]);
    console.log("This is number 4 : "+num[4]);
}

// Calling spread parameter
spreadTry(10,20,30,40);
// Here 4th index (line 8) will be undefined because we don't have index to array
// and also we can't print 10 because we are not printing num[0]