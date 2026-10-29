const display = document.getElementById('display');

let currentNumber = '';
let previousNumber = '';
let operation = null;
let overwrite = false;
let error = false;

function showNumber(value) {
    display.textContent = value;
}

function showError() {
    error = true;
    currentNumber = '';
    previousNumber = '';
    operation = null;
    overwrite = true;
    showNumber('Error');
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    overwrite = false;
    error = false;
    showNumber('0');
}

function appendNumber(number) {
    if (error) clearDisplay();
    if (overwrite) {
        currentNumber = '';
        overwrite = false;
    }
    if (number === '.' && currentNumber.includes('.')) return;
    if (currentNumber === '' && number === '.') currentNumber = '0';
    currentNumber += number;
    showNumber(currentNumber);
}

function setOperation(op) {
    if (error) return;
    if (currentNumber === '' && previousNumber === '') return;

    if (previousNumber !== '' && currentNumber !== '') calculateResult();
    if (error) return;

    if (currentNumber !== '') previousNumber = currentNumber;
    currentNumber = '';
    operation = op;
    overwrite = false;
    showNumber(previousNumber);
}

function calculateResult() {
    if (error || operation === null || currentNumber === '') return;

    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/':
            if (current === 0) {
                showError();
                return;
            }
            result = prev / current;
            break;
        case '%': result = prev % current; break;
        case '^': result = Math.pow(prev, current); break;
        default: return;
    }

    if (!isFinite(result)) {
        showError();
        return;
    }

if (Number.isFinite(result * 1000000)) result = Math.round(result * 1000000) / 1000000;
    currentNumber = String(result);
    previousNumber = '';
    operation = null;
    overwrite = true;
    showNumber(currentNumber);
}

function deleteLast() {
    if (error || overwrite) {
        clearDisplay();
        return;
    }
    currentNumber = currentNumber.slice(0, -1);
    showNumber(currentNumber || '0');
}

function calculateSqrt() {
    if (error || currentNumber === '') return;
    const value = parseFloat(currentNumber);
    if (value < 0) {
        showError();
        return;
    }
    currentNumber = String(Math.round(Math.sqrt(value) * 1000000) / 1000000);
    overwrite = true;
    showNumber(currentNumber);
}

function calculateSquare() {
    if (error || currentNumber === '') return;
    currentNumber = String(parseFloat(currentNumber) ** 2);
    overwrite = true;
    showNumber(currentNumber);
}

function calculatePercentage() {
    if (error || currentNumber === '') return;
    currentNumber = String(parseFloat(currentNumber) / 100);
    overwrite = true;
    showNumber(currentNumber);
}

function toggleSign() {
    if (error) return;
    if (currentNumber === '') {
        currentNumber = '-';
        showNumber(currentNumber);
        return;
    }
    currentNumber = currentNumber.startsWith('-')
        ? currentNumber.slice(1)
        : '-' + currentNumber;
    showNumber(currentNumber);
}

const keyMap = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '^': '^',
    'm': '%'
};

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        appendNumber('.');
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculateResult();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === '%') {
        calculatePercentage();
    } else if (keyMap[e.key]) {
        setOperation(keyMap[e.key]);
    } else {
        return;
    }
    e.preventDefault();
});
