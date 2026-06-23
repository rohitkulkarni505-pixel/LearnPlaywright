// THere are 3 sttempts and this functionis logic for that


function login(max = 1) {

    let att = max;

    function tryAgain() {
        att++;

        if (att > 3) {
            console.log("Please try again after 30 mins");
            return;
        }

        console.log("Attempt :", att);
    }

    return { tryAgain };
}

let cred = login();

cred.tryAgain(); // 2
cred.tryAgain(); // 3
cred.tryAgain(); // locked