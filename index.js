// Part 2 — Student Performance Analyzer

const scores = [92, 85, 78, 67, 95, 88, 73, 81, 90, 76, 84, 69];

let numberOfStudents = scores.length;
let passed = 0;
let failed = 0;
let total = 0;

// Initialize highest and lowest using the first score
let highest = scores[0];
let lowest = scores[0];

console.log("STUDENT SCORE ANALYSIS");
console.log("======================");

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];

    // Add score to the total
    total += score;

    // Determine whether the student passed or failed
    if (score >= 75) {
        passed++;
    } else {
        failed++;
    }

    // Determine the highest score without Math.max()
    if (score > highest) {
        highest = score;
    }

    // Determine the lowest score without Math.min()
    if (score < lowest) {
        lowest = score;
    }

    // Classify each score
    let classification;

    if (score >= 90 && score <= 100) {
        classification = "Excellent";
    } else if (score >= 85 && score <= 89) {
        classification = "Very Good";
    } else if (score >= 80 && score <= 84) {
        classification = "Good";
    } else if (score >= 75 && score <= 79) {
        classification = "Passed";
    } else {
        classification = "Failed";
    }

    console.log(`Score: ${score} - ${classification}`);
}

// Calculate the class average
const average = total / numberOfStudents;

console.log("\nCLASS SUMMARY");
console.log("=============");
console.log(`Number of students: ${numberOfStudents}`);
console.log(`Number who passed: ${passed}`);
console.log(`Number who failed: ${failed}`);
console.log(`Class average: ${average.toFixed(2)}`);
console.log(`Highest score: ${highest}`);
console.log(`Lowest score: ${lowest}`);