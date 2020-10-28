import { memory } from '../app.js';

const numberBlocks = document.querySelectorAll('.screen__number');
const decimalBlocks = document.querySelectorAll('.screen__decimal');
const negativeBlock = document.querySelector('.screen__memoryError__negative');

const display = {
    currentNumber: '',
    digits: '',
    numberArray: ['','','','','','','',''],
    decimal: NaN,
    negative: NaN,
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
        const digitsAndNegative = this.currentNumber.match(/[\d-]/g);
        if(digitsAndNegative && !this.digits) { 
            this.negative = 6;
        } else if(digitsAndNegative && this.digits) {
            this.negative = this.numberArray.length - digitsAndNegative.length;
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
    resetNumberArray() {
        this.numberArray = ['','','','','','','',''];
    },
    clearNegativeBlock() {
        negativeBlock.classList.remove('black');
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
    },
    updateDisplay() {
        this.clearDisplay();
        this.updateCurrentNumber();
        this.updateDigits();
        this.updateNumberArray();
        this.updateNegative();
        this.updateDecimal();
        this.generateDecimal(this.decimal);
        if(this.negative || this.negative === 0) {
            this.generateNegative(this.negative);
        }
        if(!this.digits) {
            this.generateZero(7);
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
    }
};

document.getElementsByClassName('screen__decimal')[7].classList.add('black');

export default display;