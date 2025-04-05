// script.js
let currentInput = '';
let currentOperator = '';
let currentValue = '';

function appendValue(value) {
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    currentValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}
