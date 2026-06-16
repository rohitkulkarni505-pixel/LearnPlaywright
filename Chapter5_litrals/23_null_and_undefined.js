// ===================================
// undefined vs null
// ===================================

// undefined
// Variable is declared but no value is assigned yet

let userName;

console.log(userName); // undefined

// Think:
// "I created the variable, but I haven't put anything in it."

// -----------------------------------

// null
// Variable is intentionally assigned "no value"

let middleName = null;

console.log(middleName); // null

// Think:
// "I know there is no value, so I explicitly set it to null."

// -----------------------------------

// Real-life Example

// Shopkeeper has not answered yet
let goodDayBiscuit;

console.log(goodDayBiscuit); // undefined

// Shopkeeper checked and confirmed biscuit is unavailable
goodDayBiscuit = null;

console.log(goodDayBiscuit); // null

// -----------------------------------

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