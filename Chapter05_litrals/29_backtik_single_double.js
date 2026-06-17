// ===================================
// STRING LITERALS IN JAVASCRIPT
// ===================================

// 1. Double Quotes String Literal
// Use double inverted commas (" ")

let firstName = "Pramod";
console.log(firstName);

// -----------------------------------

// 2. Single Quotes String Literal
// Use single inverted commas (' ')

let lastName = 'Dutta';
console.log(lastName);

// -----------------------------------

// 3. Template Literal (Backticks)
// Use backticks (` `)
// Supports variable interpolation and multi-line strings

let age = 30;

let message = `My age is ${age}`;
console.log(message);

// -----------------------------------

// Multi-line String using Backticks

let address = `
Pune,
Maharashtra,
India
`;

console.log(address);

// -----------------------------------

// Quotes Inside Strings

let sentence1 = "It's a beautiful day";
console.log(sentence1);

let sentence2 = 'He said "Hello"';
console.log(sentence2);

// -----------------------------------

// Backticks can contain both single and double quotes

let sentence3 = `It's a beautiful day and he said "Hello"`;
console.log(sentence3);

// -----------------------------------

// Summary

// Double Quotes  -> "Hello"
// Single Quotes  -> 'Hello'
// Backticks      -> `Hello ${name}`