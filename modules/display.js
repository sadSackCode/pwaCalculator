import { memory } from '../app.js';

const numberBlocks = document.querySelectorAll('.screen__number');
const decimalBlocks = document.querySelectorAll('.screen__decimal');
const negativeBlock = document.querySelector('.screen__memoryError__negative');

const display = {
    currentNumber: '',
    numberArray: ['','','','','','','',''],
    decimal: false,
    negative: false,
    updateCurrentNumber(number) {
        this.currentNumber = this.currentNumber + number;
    },
    resetNumberArray() {
        this.numberArray = ['','','','','','','',''];
    },
    updateNumberArray() {
        const displayNumber = this.currentNumber.split('');
        if(displayNumber[0] === '-') {
            displayNumber.shift();
            this.negative = true;
        }
        for(let i = 0; i < displayNumber.length; i++) {
            if(displayNumber[i] === '.') {
                this.decimal = displayNumber.length - i;
                this.clearDecimal();
                decimalBlocks[this.numberArray.length - this.decimal].classList.add('black');
            } else {
            this.numberArray.shift();
            this.numberArray.push(displayNumber[i]);
            }
            if(displayNumber[0] === '-') {
                this.negative = true;
            }
        }
    },
    updateDisplay() {
        this.clearAll();
        this.resetNumberArray();
        this.updateNumberArray();
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
        if(this.negative === true) {
            let digitPlace = display.numberArray.length - display.currentNumber.length - 1;
            if(digitPlace === 7) {
                digitPlace = 6;
                this.generateZero(7);
            }
            if(digitPlace < 0) {
                negativeBlock.className += ' black';
                return;
            }
            this.generateNegative(digitPlace);
        }
        if(!this.negative && !display.currentNumber) {
            this.generateZero(7);
        }
    },
    clearBlock(digitPlace) {
        for(let i = 0; i <= 6; i++) {
            numberBlocks[digitPlace].children[i].classList.remove('black');
        }
    },
    clearDecimal() {
        for(let i = 0; i < decimalBlocks.length; i++) {
            decimalBlocks[i].classList.remove('black');
        }
    },
    resetDecimal() {
        this.clearDecimal();
        decimalBlocks[7].classList.add('black');
        this.decimal = false;
    },
    clearNegative() {
        negativeBlock.classList.remove('black');
    },
    clearAll() {
        for(let i = 0; i < 8; i ++) {
            this.clearBlock(i);
        }
        this.clearNegative();
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
        numberBlocks[digitPlace].children[3].className += ' black';
    }
};

display.generateZero(7);

document.getElementsByClassName('screen__decimal')[7].classList.add('black');

export default display;