// Rule 1: A variable name can start with a letter
let name = "John";

// Rule 2: A variable name can start with an underscore (_)
let _count = 10; 

// Rule 3: A variable name can start with a dollar sign ($) (JavaScript)
let $price = 100;

// Rule 4: A variable name cannot start with a number
// let 2name = "John"; // ❌ Invalid

// Rule 5: After the first character, numbers are allowed
let age2 = 25;

// Rule 6: Variable names can contain letters, numbers, underscores, and $
let student_1$ = "Alex";

// Rule 7: Variable names cannot contain spaces
// let student name = "Alex"; // ❌ Invalid

// Rule 8: Variable names cannot contain special characters
// let user@name = "Alex"; // ❌ Invalid
// let user-name = "Alex"; // ❌ Invalid

// Rule 9: Variable names are case-sensitive
let age = 20;
let Age = 30; // Different variable from 'age'

// Rule 10: Variable names cannot be reserved keywords
// let for = 10; // ❌ Invalid
// let class = "A"; // ❌ Invalid

// Rule 11: Use meaningful and descriptive variable names
let studentName = "David";
let totalMarks = 450;

// Rule 12: Follow a naming convention (camelCase)
let firstName = "Emma";

// Rule 13: snake_case is also commonly used
let student_name = "Emma";

// Rule 14: Avoid unclear variable names unless necessary
let x = 5; // Possible, but not descriptive
let totalStudents = 50; // Better

// Rule 15: Variable names should be unique within the same scope
let city = "Pune";
// let city = "Mumbai"; // ❌ Cannot redeclare with let in the same scope

console.log(name, _count, $price, age2, student_1$, age, Age);