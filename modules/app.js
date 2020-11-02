const numberBlocks = document.querySelectorAll('.screen__number');
const decimalBlocks = document.querySelectorAll('.screen__decimal');
const negativeBlock = document.querySelector('.screen__memoryError__negative');
const errorBlock = document.querySelector('.screen__memoryError__error')

const display = {
    currentNumber: '',
    digits: '',
    numberArray: ['','','','','','','',''],
    decimal: NaN,
    negative: NaN,
    error: false,
    updateCurrentNumber() {
        this.currentNumber = memory.currentNumber;
    },
    updateDigits() {
        this.digits = this.currentNumber.match(/\d/g);
    },
    updateNumberArray() {
        this.resetNumberArray();
        if(this.digits) {
            this.digits.forEach(digit => {
                this.numberArray.shift();
                this.numberArray.push(digit);
            })
        }
    },
    updateNegative() {
        if(this.currentNumber) { 
            if(this.currentNumber[0] === '-') {
                const digitsAndNegative = this.currentNumber.match(/[\d-]/g);
                if(!this.digits) {
                    this.negative = 6;
                } else {
                this.negative = this.numberArray.length - digitsAndNegative.length;
                }
            } else {
                this.negative = NaN;
            } 
        } else {
            this.negative = NaN;
        }
    },
    updateDecimal() {
        if(this.digits) {
            const digitsAndDecimal = this.currentNumber.match(/[\d.]/g);
            if(digitsAndDecimal.indexOf('.') > 0) {
                const decimalValue = digitsAndDecimal.length - digitsAndDecimal.indexOf('.');
                this.decimal = this.numberArray.length - decimalValue;
            } else {
                this.decimal = 7;
            }
        } else {
            this.decimal = 7;
        }
    },
    updateError() {
        if(memory.error === true) {
            this.error = true;
        } else {
            this.error = false;
        }
    },
    resetNumberArray() {
        this.numberArray = ['','','','','','','',''];
    },
    clearNegativeBlock() {
        negativeBlock.classList.remove('black');
    },
    clearErrorBlock() {
        errorBlock.classList.remove('black-text');
    },
    clearDecimalBlocks() {
        for(let i = 0; i < decimalBlocks.length; i++) {
            decimalBlocks[i].classList.remove('black');
        }
    },
    clearBlocks() {
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j <= 6; j++) {
                numberBlocks[i].children[j].classList.remove('black');
            }
        }
    },
    clearDisplay() {
        this.clearBlocks();
        this.clearDecimalBlocks();
        this.clearNegativeBlock();
        this.clearErrorBlock();
    },
    updateDisplay() {
        this.clearDisplay();
        this.updateCurrentNumber();
        this.updateDigits();
        this.updateNumberArray();
        this.updateNegative();
        this.updateError();
        this.updateDecimal();
        this.generateDecimal(this.decimal);
        if(this.negative || this.negative === 0) {
            this.generateNegative(this.negative);
        }
        if(!this.digits) {
            this.generateZero(7);
        }
        if(this.error === true) {
            this.generateError();
        }
        for(let i = 0; i < this.numberArray.length; i++) {
            if(this.numberArray[i] === '1') {
                this.generateOne(i);
            }
            if(this.numberArray[i] === '2') {
                this.generateTwo(i);
            }
            if(this.numberArray[i] === '3') {
                this.generateThree(i);
            }
            if(this.numberArray[i] === '4') {
                this.generateFour(i);
            }
            if(this.numberArray[i] === '5') {
                this.generateFive(i);
            }
            if(this.numberArray[i] === '6') {
                this.generateSix(i);
            }
            if(this.numberArray[i] === '7') {
                this.generateSeven(i);
            }
            if(this.numberArray[i] === '8') {
                this.generateEight(i);
            }
            if(this.numberArray[i] === '9') {
                this.generateNine(i);
            }
            if(this.numberArray[i] === '0') {
                this.generateZero(i);
            }
        }
    },
    generateOne(digitPlace) {
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
    },
    generateTwo(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[4].className += ' black';
        numberBlocks[digitPlace].children[6].className += ' black';
    },
    generateThree(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
        numberBlocks[digitPlace].children[6].className += ' black';
    },
    generateFour(digitPlace) {
        numberBlocks[digitPlace].children[1].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
    },
    generateFive(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[1].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
        numberBlocks[digitPlace].children[6].className += ' black';
    },
    generateSix(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[1].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[4].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
        numberBlocks[digitPlace].children[6].className += ' black';
    },
    generateSeven(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
    },
    generateEight(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[1].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[4].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
        numberBlocks[digitPlace].children[6].className += ' black';
    },
    generateNine(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[1].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[3].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
    },
    generateZero(digitPlace) {
        numberBlocks[digitPlace].children[0].className += ' black';
        numberBlocks[digitPlace].children[1].className += ' black';
        numberBlocks[digitPlace].children[2].className += ' black';
        numberBlocks[digitPlace].children[4].className += ' black';
        numberBlocks[digitPlace].children[5].className += ' black';
        numberBlocks[digitPlace].children[6].className += ' black';
    },
    generateNegative(digitPlace) {
        if(digitPlace < 0) {
            negativeBlock.className += ' black';
            return;
        }
        numberBlocks[digitPlace].children[3].className += ' black';
    },
    generateDecimal(decimalPlace) {
        if(decimalPlace < 8 || decimalPlace === 0) {
            decimalBlocks[decimalPlace].className += ' black';
        }
    },
    generateError() {
        errorBlock.className += ' black-text';
    }
};

document.getElementsByClassName('screen__decimal')[7].classList.add('black');


const logic = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
const memory = {
    currentNumber: '',
    previousNumber: '',
    operation: '',
    error: false,
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
        } else if(this.previousNumber) {
            this.previousNumber = '';
            this.operation = '';
        }
        this.error = false;
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
            if(!memory.currentNumber) {
                memory.updateCurrentNumber(button.innerText);
                display.updateDisplay();
            }
            return;
        }
        if(!memory.currentNumber && button.innerText === '.') {
            memory.updateCurrentNumber('0.');
        } else {
            memory.updateCurrentNumber(button.innerText);
        }
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
    if(memory.previousNumber && memory.operation) {
        if(memory.currentNumber) {
            memory.parseCurrentNumber();
            memory.currentNumber = compute(memory.currentNumber, memory.previousNumber, memory.operation).toString();
        } else {
            memory.currentNumber = memory.previousNumber;
            memory.currentNumber = compute(memory.currentNumber, memory.previousNumber, memory.operation).toString();
        }
        const digits = memory.currentNumber.match(/\d/g)
        if(digits.length > 8) {
            let digitsAndDecimal = memory.currentNumber.match(/[\d.]/g);
            if(digitsAndDecimal.indexOf('.') > 8 || digitsAndDecimal.indexOf('.') < 0) {
                memory.error = true;
                digitsAndDecimal = digitsAndDecimal.join('');
                digitsAndDecimal = digitsAndDecimal.substring(0, 8);
            } else {
                memory.error = false;
                digitsAndDecimal = parseFloat(digitsAndDecimal.join(''));
                digitsAndDecimal = digitsAndDecimal.toPrecision(8);
                digitsAndDecimal = digitsAndDecimal.toString();
            }
            if(memory.currentNumber[0] === '-') {
                memory.currentNumber = '-' + digitsAndDecimal;
            } else {
                memory.currentNumber = digitsAndDecimal;
            }
        }
        memory.previousNumber = '';
        display.updateDisplay();
        memory.currentNumber = '';
    }
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
squareRootButton.addEventListener('click', () => {
    if(memory.currentNumber) {
        const squareRoot = Math.sqrt(memory.currentNumber);
        memory.currentNumber = '';
        memory.updateCurrentNumber(squareRoot);
        display.updateDisplay();
    }
})

display.updateDisplay();