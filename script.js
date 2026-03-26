let display = document.getElementById("display");
let historyDisplay = document.getElementById("historyDisplay");
let historyList = document.getElementById("historyList");

let currentInput = "";
let operator = "";
let firstValue = "";

// Append numbers
function append(value) {
    if (value === "." && currentInput.includes(".")) return;
    currentInput += value;
    updateDisplay();
}

// Set operator
function setOperator(op) {
    if (currentInput === "") return;

    if (firstValue !== "") {
        calculate();
    }

    operator = op;
    firstValue = currentInput;
    currentInput = "";
}

// Clear
function clearDisplay() {
    currentInput = "";
    operator = "";
    firstValue = "";
    historyDisplay.innerText = "";
    updateDisplay();
}

// Calculate
function calculate() {
    let secondValue = currentInput;
    if (!firstValue || !secondValue) return;

    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    let result;

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num2 === 0) {
                display.innerText = "Error";
                return;
            }
            result = num1 / num2;
            break;
        default: return;
    }

    let expression = `${firstValue} ${operator} ${secondValue} = ${result}`;

    // Add to history
    let li = document.createElement("li");
    li.innerText = expression;
    historyList.prepend(li);

    historyDisplay.innerText = `${firstValue} ${operator} ${secondValue}`;
    currentInput = result.toString();
    operator = "";
    firstValue = "";

    updateDisplay();
}

// Update display
function updateDisplay() {
    display.innerText = currentInput || "0";
}

// Theme system
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

// Load theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "spring";
    document.body.className = saved;
};
