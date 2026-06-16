// Type Check

let a;
let b = null;

console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (JavaScript historical bug)

// -----------------------------------

// Equality Check

console.log(null == undefined);  // true
// Loose equality considers them similar

console.log(null === undefined); // false
// Strict equality checks type and value

// -----------------------------------

// Summary

// undefined = Not assigned yet
// null      = Intentionally empty