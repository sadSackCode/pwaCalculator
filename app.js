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
        console.log(this.previousNumber);
    },
    parseCurrentNumber() {
        this.currentNumber = parseFloat(this.currentNumber);
    },
    updateOperation(symbol) {
        this.operation = symbol;
        console.log(symbol);
    }
};
const compute = function(currentNumber, previousNumber, operation) {
    if(operation === '+') {
        logic.add(previousNumber, currentNumber);
    } else if (operation === '-') {
        logic.subtract(previousNumber, currentNumber);
    } else if (operation === 'X') {
        logic.multiply(previousNumber, currentNumber);
    } else if (operation === '÷') {
        logic.divide(previousNumber, currentNumber);
    }
}

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
        memory.updateCurrentNumber(button.innerText);
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        memory.updatePreviousNumber();
        memory.updateOperation(button.innerText);
    })
})
equalsButton.addEventListener('click', () => {
    memory.parseCurrentNumber();
    compute(memory.currentNumber, memory.previousNumber, memory.operation);
})