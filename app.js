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
    // clearCurrentNumber() {
    //     this.currentNumber = '';
    // },
    // clearPreviousNumber() {
    //     this.previousNumber = '';
    // },
    // clearOperation() {
    //     this.operation = undefined;
    // },
    clear() {
        if(this.currentNumber) {
            this.currentNumber = '';
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
const display = {
    numberArray: ['','','','','','','',''],
    resetNumberArray() {
        this.numberArray = ['','','','','','','',''];
    },
    updateNumberArray() {
        const displayNumber = memory.currentNumber.split('');
        this.numberArray.shift();
        this.numberArray.push(displayNumber[displayNumber.length - 1]);
    },
    updateDisplay() {
        this.clearAll();
        this.updateNumberArray();
        console.log(this.numberArray);
        for(let i = this.numberArray.length - 1; i >= 0; i--) {
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
    clearBlock(digitPlace) {
        numberBlocks[digitPlace].children[0].classList.remove('black');
        numberBlocks[digitPlace].children[1].classList.remove('black');
        numberBlocks[digitPlace].children[2].classList.remove('black');
        numberBlocks[digitPlace].children[3].classList.remove('black');
        numberBlocks[digitPlace].children[4].classList.remove('black');
        numberBlocks[digitPlace].children[5].classList.remove('black');
        numberBlocks[digitPlace].children[6].classList.remove('black');
    },
    clearAll() {
        for(let i = 0; i < 8; i ++) {
            this.clearBlock(i);
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
const numberBlocks = document.querySelectorAll('.screen__number');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        memory.updateCurrentNumber(button.innerText);
        display.updateDisplay();
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
onClearButton.addEventListener('click', () => {
    memory.clear();
    display.clearAll();
    display.resetNumberArray();
    console.log(display.numberArray);
})