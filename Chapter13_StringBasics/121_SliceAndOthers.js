let str = "Login_Test_Pas_001"


// Slice method
console.log(str.slice(0, 5)); // Login
console.log(str.slice(1)); // ogin_Test_Pas_001
console.log(str.slice(-3)); // 001

// Includes - boolean
console.log(str.includes("Pass")); // false

// substring
console.log(str.substring(1,3)); // og (This includes index 1 but not 3s)
console.log(str.substring(-3)); // Negative is not allowed - it will return whole substring



