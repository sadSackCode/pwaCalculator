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
        console.log(this.previousNumber);
    },
    parseCurrentNumber() {
        if(this.currentNumber) {
            this.currentNumber = parseFloat(this.currentNumber);
        }
    },
    updateOperation(symbol) {
        this.operation = symbol;
        console.log(symbol);
    },
    clear() {
        if(this.currentNumber) {
            this.currentNumber = '';
            this.decimal = 7;
            console.log('currentNumber is ' + this.currentNumber + ' previousNumber is ' + this.previousNumber + ' operation is ' + this.operation);
            return;
        } else if(this.previousNumber) {
            this.previousNumber = '';
            this.operation = undefined;
            console.log('currentNumber is ' + this.currentNumber + ' previousNumber is ' + this.previousNumber + ' operation is ' + this.operation);
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
const decimalButton = document.querySelector('[data-decimal]');
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
        if(memory.previousNumber && !memory.currentNumber) {
            display.resetDecimal();
            display.updateDisplay();
        }
        if(display.decimal > 0 || display.decimal === 0) {
            document.getElementsByClassName('screen__decimal')[display.decimal].classList.remove('black');
            display.decimal = display.decimal - 1;
            document.getElementsByClassName('screen__decimal')[display.decimal].classList.add('black');
        }
        memory.updateCurrentNumber(button.innerText);
        display.updateCurrentNumber(button.innerText);
        display.updateDisplay();
    })
})
decimalButton.addEventListener('click', () => {
    if(memory.previousNumber && !memory.currentNumber) {
        display.currentNumber = '0';
        display.resetDecimal();
        display.updateDisplay();
    }
    if(!memory.currentNumber) {
        display.currentNumber = '0';
    }
    display.decimal = 7;
    memory.updateCurrentNumber('.');
    console.log(memory.currentNumber);
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        memory.updatePreviousNumber();
        memory.updateOperation(button.getAttribute('data-operation'));
        display.currentNumber = '';
        display.negative = false;
    })
})
equalsButton.addEventListener('click', () => {
    memory.parseCurrentNumber();
    const total = compute(memory.currentNumber, memory.previousNumber, memory.operation);
    memory.currentNumber = total.toString();
    display.currentNumber = total.toString();
    display.resetDecimal();
    display.updateDisplay();
})
onClearButton.addEventListener('click', () => {
    memory.clear();
    display.clearAll();
    display.resetDecimal();
    display.resetNumberArray();
    display.currentNumber = '';
    display.generateZero(7);
    console.log(display.numberArray);
})
negativeButton.addEventListener('click', () => {
    if(memory.currentNumber[0] === '-') {
        memory.currentNumber = memory.currentNumber.substring(1);
        display.negative = false;
    } else {
        const neg = '-';
        memory.currentNumber = neg.concat('', memory.currentNumber);
        display.negative = true;
    }
    display.updateDisplay();
    console.log(memory.currentNumber);
    console.log(display.negative);
    console.log(display.numberArray.length - memory.currentNumber.length);
})

export { memory };