let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;
let shouldResetScreen = false;

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetScreen) {
        display.textContent = '';
        shouldResetScreen = false;
    }
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    display.textContent = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '' && previousNumber === '') return;
    if (currentNumber === '' && op !== '^' && op !== '√') {
        operation = op;
        return;
    }
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    if (operation === null || currentNumber === '') return;
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                display.textContent = 'Error';
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }
    
    result = Math.round(result * 1000000) / 1000000;
    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    shouldResetScreen = true;
    display.textContent = result;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    shouldResetScreen = false;
    display.textContent = '0';
}

function deleteLast() {
    if (currentNumber === '') return;
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber || '0';
}

function calculateSqrt() {
    if (currentNumber === '') return;
    const current = parseFloat(currentNumber);
    if (current < 0) {
        display.textContent = 'Error';
        clearDisplay();
        return;
    }
    currentNumber = Math.sqrt(current).toString();
    shouldResetScreen = true;
    display.textContent = currentNumber;
}

function calculateSquare() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) ** 2).toString();
    shouldResetScreen = true;
    display.textContent = currentNumber;
}

function calculatePercentage() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    shouldResetScreen = true;
    display.textContent = currentNumber;
}

function toggleSign() {
    if (currentNumber === '') return;
    if (currentNumber.startsWith('-')) {
        currentNumber = currentNumber.slice(1);
    } else {
        currentNumber = '-' + currentNumber;
    }
    display.textContent = currentNumber;
}