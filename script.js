let display = document.getElementById("display");

let currentInput = "";
let operator = "";
let firstValue = "";

// Add numbers or decimal
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

// Clear everything
function clearDisplay() {
    currentInput = "";
    operator = "";
    firstValue = "";
    updateDisplay();
}

// Calculate result
function calculate() {
    let secondValue = currentInput;

    if (firstValue === "" || secondValue === "") return;

    let result;

    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                display.value = "Error";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    firstValue = "";
    updateDisplay();
}

// Update display
function updateDisplay() {
    display.value = currentInput || "0";
}
