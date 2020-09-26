import { memory } from '../app.js';

const numberBlocks = document.querySelectorAll('.screen__number');

const display = {
    numberArray: ['','','','','','','',''],
    resetNumberArray() {
        this.numberArray = ['','','','','','','',''];
    },
    updateNumberArray() {
        const displayNumber = memory.currentNumber.split('');
        displayNumber.forEach(num => {
            this.numberArray.shift();
            this.numberArray.push(num);
        })
    },
    updateDisplay() {
        this.clearAll();
        this.resetNumberArray();
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
        for(let i = 0; i <= 6; i++) {
            numberBlocks[digitPlace].children[i].classList.remove('black');
        }
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

export default display;