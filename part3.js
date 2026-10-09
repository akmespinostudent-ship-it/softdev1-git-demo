// Part 3 — Function-Based Calculator

// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }

    return a / b;
}

// Remainder function
function remainder(a, b) {
    if (b === 0) {
        return "Error: Cannot find the remainder when dividing by zero.";
    }

    return a % b;
}

// Exponentiation function
function exponentiate(a, b) {
    return a ** b;
}


// Function that selects the mathematical operation
function calculate(a, b, operation) {
    if (operation === "add") {
        return add(a, b);
    } else if (operation === "subtract") {
        return subtract(a, b);
    } else if (operation === "multiply") {
        return multiply(a, b);
    } else if (operation === "divide") {
        return divide(a, b);
    } else if (operation === "remainder") {
        return remainder(a, b);
    } else if (operation === "exponentiate") {
        return exponentiate(a, b);
    } else {
        return "Error: Invalid operation.";
    }
}


// TESTING

console.log("CALCULATION RESULTS");
console.log("===================");

// Test 1: Addition
console.log(`10 + 5 = ${calculate(10, 5, "add")}`);

// Test 2: Subtraction
console.log(`20 - 8 = ${calculate(20, 8, "subtract")}`);

// Test 3: Multiplication
console.log(`7 × 6 = ${calculate(7, 6, "multiply")}`);

// Test 4: Division
console.log(`20 ÷ 4 = ${calculate(20, 4, "divide")}`);

// Test 5: Remainder
console.log(`17 % 5 = ${calculate(17, 5, "remainder")}`);

// Test 6: Exponentiation
console.log(`2 ^ 5 = ${calculate(2, 5, "exponentiate")}`);

// Test 7: Division by zero
console.log(`10 ÷ 0 = ${calculate(10, 0, "divide")}`);
