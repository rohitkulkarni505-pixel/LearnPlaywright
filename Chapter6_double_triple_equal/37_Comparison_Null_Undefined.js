// ===================================
// == vs === WITH null AND undefined
// ===================================

// Loose Equality (==)

console.log(null == undefined); // true

// Note:
// JavaScript treats null and undefined
// as equal when using ==

// -----------------------------------

// Strict Equality (===)

console.log(null === undefined); // false

// Why?
// null      -> type is null
// undefined -> type is undefined

// Different types => false

// -----------------------------------

// More Examples

console.log(null == null); // true
console.log(undefined == undefined); // true

console.log(null === null); // true
console.log(undefined === undefined); // true

// ===================================
// NOTE
// ===================================

// null == undefined   -> true
// null === undefined  -> false

// ==  -> value comparison
// === -> value + type comparison