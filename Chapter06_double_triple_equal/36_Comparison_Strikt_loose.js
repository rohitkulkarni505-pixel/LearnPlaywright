// ===================================
// =, ==, === IN JAVASCRIPT
// ===================================

// 1. Assignment Operator (=)
// Used to assign a value to a variable

let x = 10;

console.log(x); // 10

// Note:
// "=" does NOT compare values.
// It simply assigns a value.

// -----------------------------------

// 2. Loose Equality Operator (==)
// Compares only values.
// JavaScript automatically converts data types if needed.

console.log(10 == "10"); // true

// Internally:
// Number 10 is converted and compared with String "10"

// Note:
// Type conversion happens automatically.
// This can sometimes lead to unexpected results.

// -----------------------------------

console.log(true == 1); // true
console.log(false == 0); // true

// -----------------------------------

// 3. Strict Equality Operator (===)
// Compares both value and data type.

console.log(10 === "10"); // false

// Internally:
// Value is same (10)
// Type is different (number vs string)

// Therefore:
// false

// -----------------------------------

console.log(10 === 10); // true
console.log("hello" === "hello"); // true

// -----------------------------------

// Real Interview Example

let a = 5;
let b = "5";

console.log(a == b);  // true
console.log(a === b); // false

// Why?
// ==  -> checks only value
// === -> checks value + type

// -----------------------------------

// Recommended Practice

// Always prefer === over ==

// Good
console.log(10 === 10);

// Avoid unless you specifically need type conversion
console.log(10 == "10");

// ===================================
// QUICK REFERENCE
// ===================================

// =   Assignment
// ==  Value Comparison (type conversion allowed)
// === Value + Type Comparison (recommended)