
// ===================================
// NULLISH COALESCING OPERATOR (??)
// ===================================

// The ?? operator returns the right-side value
// only when the left-side value is null or undefined.

// Syntax:
// value ?? defaultValue

// -----------------------------------

// Example 1: Left value is null

let userName = null;

console.log(userName ?? "Guest");

// Output:
// Guest

// Because userName is null

// -----------------------------------

// Example 2: Left value is undefined

let city;

console.log(city ?? "Pune");

// Output:
// Pune

// Because city is undefined

// -----------------------------------

// Example 3: Left value has a value

let country = "India";

console.log(country ?? "USA");

// Output:
// India

// Because country is neither null nor undefined

// -----------------------------------

// Important Difference from ||

// Using ||

console.log(0 || 100);

// Output:
// 100

// Because 0 is treated as falsy

// -----------------------------------

// Using ??

console.log(0 ?? 100);

// Output:
// 0

// Because 0 is NOT null or undefined

// -----------------------------------

console.log("" || "Default");

// Output:
// Default

// Because empty string is falsy

// -----------------------------------

console.log("" ?? "Default");

// Output:
// ""

// Because empty string is NOT null or undefined

// ===================================
// QUICK REFERENCE
// ===================================

// null      ?? "Default" -> "Default"
// undefined ?? "Default" -> "Default"
// 0         ?? "Default" -> 0
// ""        ?? "Default" -> ""
// false     ?? "Default" -> false