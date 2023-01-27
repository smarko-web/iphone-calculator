class Calculator {
    constructor(prevNumber, currentNumber) {
        this.prevNumber = prevNumber;
        this.currentNumber = currentNumber;
        this.clearAll();
    }
    clear() {
        this.currentNumber = '';
    }
    clearAll() {
        this.prevNumber = '';
        this.currentNumber = '';
        this.operation = undefined;
    }
    appendNumber(number) {
        this.currentNumber = number;
    }
    choiceOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentNumber.innerText = this.currentNumber;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearAllButton = document.querySelector('[data-clear-all]');
const equalButton = document.querySelector('[data-equal]');
const prevNumber = document.querySelector('[data-previous]');
const currentNumber = document.querySelector('[data-current]');

const calculator = new Calculator(prevNumber, currentNumber);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        // console.log(calculator.currentNumber);
    });
});

// calculator.appendNumber(5);
// calculator.updateDisplay();
// console.log(calculator.currentNumber);


// currentDisplay.innerHTML = "123";