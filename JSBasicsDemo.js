// ========================================
// JavaScript Basics Demo for Students
// Variables, Data Types, and Functions
// ========================================

let studentName = "Alice Johnson";           // String
const studentAge = 20;                       // Number
let isEnrolled = true;                       // Boolean

const numbers = [85, 92, 78, 90, 88];        // Array
const student = {                            // Object
    id: 12345,
    name: "Alice Johnson",
    major: "Computer Science",
    gpa: 3.75
};

// Function declaration
function calculateAverage(grades) {
    if (!grades || grades.length === 0) return 0;
    return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

// Arrow function
const getGradeLevel = (gpa) => gpa >= 3.7 ? "Excellent" : gpa >= 3.0 ? "Good" : "Needs Improvement";

console.log(`Average grade: ${calculateAverage(numbers)}`);
console.log(`Grade level: ${getGradeLevel(student.gpa)}`);
