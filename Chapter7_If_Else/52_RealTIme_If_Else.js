// You can give 3 roles i.e. -> "admin", "editor", "viwer"

let isLogin = true;
let role = "viwer"


if(isLogin){
    if (role == "admin") {
        console.log("You can do anything");
        
    } else if (role == "editor") {
        console.log("You can edit in your section");
        
    } else if (role == "viwer") {
        console.log("You can view in your section");
    } else {
         console.log("Just site visit");
    }
}