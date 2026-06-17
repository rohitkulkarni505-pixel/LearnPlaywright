// ===================================
// == vs === WITH 0 AND ""
// ===================================

// Loose Equality (==)
// JavaScript converts types automatically

console.log(0 == ""); // true

// Internally:
// Number 0 == Number 0

// -----------------------------------

// Strict Equality (===)
// Value and type must be the same

console.log(0 === ""); // false

// Internally:
// Number 0 !== String ""

// -----------------------------------

// More Examples

console.log(false == 0);  // true
console.log(false == ""); // true

console.log(false === 0);  // false
console.log(false === ""); // false

// ===================================
// NOTE
// ===================================

// ==  -> compares value only
// === -> compares value and type

// Because of type conversion,
// 0 == "" becomes true

// Therefore, always prefer ===