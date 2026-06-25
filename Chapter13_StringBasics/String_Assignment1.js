// Assignment -> Palendrome 
function isPalindrome(str) {

    for(let i = 0; i < str.length / 2; i++) {

        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }

    }

    return true;
}

console.log(isPalindrome("madam"));

isPalindrome("tenet");



// Anagram 
function isAnagram(str1, str2) {

    if(str1.length !== str2.length) {
        return false;
    }

    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    return s1 === s2;
}

console.log(isAnagram("listen", "silent"));
isAnagram("cat", "tca")

// split("")  -> Converts the string into an array of characters.
// sort()     -> Arranges the characters in alphabetical order.
// join("")   -> Joins the sorted characters back into a string.
// If two strings become identical after sorting, they are anagrams.

// "cat"
// split("") -> ["c", "a", "t"]
// sort()    -> ["a", "c", "t"]
// join("")  -> "act"