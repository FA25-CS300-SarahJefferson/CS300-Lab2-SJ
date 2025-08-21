// File Name: JSBasics.js
// JavaScript (JS) Basics Demo

// Declare a variable named studentName and assign it a string value
let studentName = "Sarah Jefferson";

// Declare a variable named studentAge and assign it a numeric value
const studentAge = 20;

// Declare a boolean variable named isEnrolled value will be true/false
let isEnrolled = true;

// Declare a constant named numbers and assign it an array of numbers
const numbers = [85, 92, 78, 90, 88];

// Declare a constant named student and assign it an object with many properties
const student = {
    id: 12345,
    name: "Sarah Jefferson",
    major: "Computer Science",
    gpa: 3.5
};

// Function declarations

// This function will calculate the average grades in an array
function calculateAverage(grades) {
    // if grades is not provided or is empty, return 0 as the average
    if (!grades || grades.length == 0) return 0;
    // Use reduce to sum all grades then divide by the number of grades to get the average
    return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

// Print the average grade to the console using template literals
console.log(`Average grade: ${calculateAverage(numbers)}`);

// Print the student object
console.log(student);

//// Arrow function
const getGradeLevel = (gpa) => gpa >= 3.7 ? "Excellent" : gpa >= 3.0 ? "Good" : "Needs Improvement";

console.log(`Average grade: ${calculateAverage(numbers)}`);
console.log(`Grade level: ${getGradeLevel(student.gpa)}`);