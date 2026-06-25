let str = "TryOnThisString";

// Upper and Lower case
console.log(str.toUpperCase());
console.log(str.toLowerCase());


let otherStr = "    This is   my new string        ";

// Trim, Replace and replaceAll
console.log(otherStr.trim());
console.log(otherStr.replace("This", "Hey")); // Relacing This -> Hey
console.log(otherStr.replaceAll(" ", "*")); // Relacing ' ' -> *


// concat, split
console.log(str.concat("-> Concated this"));
console.log(str.split('y', 5));  // This returns array
let arr = ["Hey", "Hi"];
console.log(arr.join(";"));  // This will join elements in array

