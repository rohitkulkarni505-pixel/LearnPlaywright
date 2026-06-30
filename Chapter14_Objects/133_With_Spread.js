// Copy an Object
const student21 = {
    rollNo: 121,
    name: "Rahul",
    city: "Kolhapur"
};

const copyStudent21 = {
    ...student21
};

console.log(copyStudent21);
console.log('------------------');

// Add new property
const student2 = {
    rollNo: 121,
    name: "Rahul"
};

const newStudent2 = {
    ...student2,
    city: "Kolhapur"
};

console.log(newStudent2);

console.log('------------------');

const student = {
    rollNo: 121,
    name: "Rahul"
};

const updatedStudent = {
    ...student,
    name: "Rohit"
};

console.log(updatedStudent);

// Another Problem ->
// a=b
const student1 = {
    rollNo: 121,
    name: "Rohan",
    city: "Kolhapur"
};


const student3 = student1;
console.log(student3);
