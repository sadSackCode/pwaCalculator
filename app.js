import display from './modules/display.js';

const logic = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
const memory = {
    currentNumber: '',
    previousNumber: '',
    operation: undefined,
    updateCurrentNumber(number) {
        this.currentNumber = this.currentNumber + number;
    },
    updatePreviousNumber() {
        this.previousNumber = parseFloat(this.currentNumber);
        this.currentNumber = '';
    },
    parseCurrentNumber() {
        if(this.currentNumber) {
            this.currentNumber = parseFloat(this.currentNumber);
        }
    },
    updateOperation(symbol) {
        this.operation = symbol;
    },
    clear() {
        if(this.currentNumber) {
            this.currentNumber = '';
            return;
        } else if(this.previousNumber) {
            this.previousNumber = '';
            this.operation = undefined;
            return;
        } 
    }
};

const compute = function(currentNumber, previousNumber, operation) {
    if(Object.keys(logic).includes(operation)) {
        return logic[operation](previousNumber, currentNumber);
    }
};

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const onClearButton = document.querySelector('[data-on-clear]');
const negativeButton = document.querySelector('[data-negative]');
const squareRootButton = document.querySelector('[data-square-root]');
const percentButton = document.querySelector('[data-percent]');
const memoryRecallButton = document.querySelector('[data-memory-recall]');
const memoryMinusButton = document.querySelector('[data-memory-minus]');
const memoryPlusButton = document.querySelector('[data-memory-plus]');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(display.digits && display.digits.length == 8) {
            return;
        }
        memory.updateCurrentNumber(button.innerText);
        display.updateDisplay();
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        memory.updatePreviousNumber();
        memory.updateOperation(button.getAttribute('data-operation'));
    })
})
equalsButton.addEventListener('click', () => {
    memory.parseCurrentNumber();
    const total = compute(memory.currentNumber, memory.previousNumber, memory.operation);
    memory.currentNumber = total.toString();
    memory.previousNumber = '';
    display.updateDisplay();
})
onClearButton.addEventListener('click', () => {
    memory.clear();
    display.updateDisplay();
})
negativeButton.addEventListener('click', () => {
    if(memory.currentNumber[0] === '-') {
        memory.currentNumber = memory.currentNumber.substring(1);
    } else {
        const neg = '-';
        memory.currentNumber = neg.concat('', memory.currentNumber);
    }
    display.updateDisplay();
})

display.updateDisplay();

export { memory };