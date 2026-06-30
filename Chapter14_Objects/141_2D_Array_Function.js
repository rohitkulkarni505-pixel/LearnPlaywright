// Function which can be used in array

let scores = [
    [85, 90, 95],
    [70, 65, 45],
    [80, 90, 70]
];

let checkPass = 0;

// This is sum of all rows
let rowSums = scores.map(row => row.reduce((a, b)=> a+b, 0));
console.log(rowSums);

// Pass result
let results = [
    ["login pass", "register pass", "logout Fail"],
    ["search pass", "filter fail", "sort fail"],
    ["checkout pass", "payment pass", "confirmation pass"],
]

for (const rows of results) {
    for (const result of rows) {
        if(result.includes("pass")==true){
            checkPass++;
        }
    }
}
console.log(checkPass);
