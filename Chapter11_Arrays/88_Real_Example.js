let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

console.log("----------------");


browser.pop(); // Remove last Element
console.log(browser);

console.log("----------------");

let removed = browser.shift(); // Remove first element
console.log(browser);
console.log(removed);


// for (let i = 0; i < browser.length; i++) {
//     console.log(browser[i]);
//     if (browser[i] === "opera") {
//         console.log("Opera is removed from the selenium!");
//     }
// }