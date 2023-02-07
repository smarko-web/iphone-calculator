class Calculator {
    constructor(prevNumber, currentNumber) {
        this.prevNumber = prevNumber;
        this.currentNumber = currentNumber;
        this.clearAll();
    }
    clear() {
        this.currentNumber = '';
        // this.currentNumber = this.currentNumber.toString().slice(0, -1);
        // delete last degit
    }
    clearAll() {
        this.prevNumber = '';
        this.currentNumber = '';
        this.operation = undefined;
    }
    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return;
        // prevents users from entering multiple decimals

        this.currentNumber = this.currentNumber.toString() + number.toString();
    }
    appendOperation(operation) {
        if (this.currentNumber === '') return;
        // prevents users from entering multiple operations one after another
        if (this.prevNumber !== '') {
            this.compute();
        }
        this.operation = operation;
        this.prevNumber = this.currentNumber;
        this.currentNumber = '';
    }
    percentOf() {
        if (!this.currentNumber || this.currentNumber === 0) return;
        let percent = this.currentNumber / 100;
        this.currentNumber = percent;
    }
    revert() {
        if (!this.currentNumber || this.currentNumber === 0) return;
        let oppsiteValue;
        oppsiteValue = this.currentNumber * -1;
        this.currentNumber = oppsiteValue;
    }
    compute() {
        let computation;
        const previousNumber = parseFloat(this.prevNumber);
        const currentNumber = parseFloat(this.currentNumber);

        if(isNaN(previousNumber) || isNaN(currentNumber)) return

        switch (this.operation) {
            case '+':
                computation = previousNumber + currentNumber;
                break;
            case '-':
                computation = previousNumber - currentNumber;
                break;
            case 'x':
                computation = previousNumber * currentNumber;
                break;
            case '÷':
                computation = previousNumber / currentNumber;
                break;
            default:
                return;
        }

        this.currentNumber = computation;
        this.operation = undefined;
        this.prevNumber = '';
    }

    formatNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
        // this block of code has issues with decimal numbers
        // const floatNumber = parseFloat(number);
        // if (isNaN(floatNumber)) return '';
        // return floatNumber.toLocaleString('en');
    }

    updateDisplay() {
        currentNumber.innerText = this.formatNumber(this.currentNumber);
        if(this.operation != null) {
            prevNumber.innerText = `${this.formatNumber(this.prevNumber)} ${this.operation}`;
        }else {
            prevNumber.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const percentButton = document.querySelector('[data-percent]');
const revertButton = document.querySelector('[data-revert');
const clearAllButton = document.querySelector('[data-all-clear]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const prevNumber = document.querySelector('[data-previous]');
const currentNumber = document.querySelector('[data-current]');

const calculator = new Calculator(prevNumber, currentNumber);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        clearAllButton.classList.add('hide');
        clearButton.classList.remove('hide');
        //make the clear button work 
        clearButton.addEventListener('click', () => {
            calculator.clear();
            calculator.updateDisplay();
            //make the AC button visible again
            clearButton.classList.add('hide');
            clearAllButton.classList.remove('hide');
        });
    });

    
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperation(button.innerText);
        calculator.updateDisplay();
        clearAllButton.classList.toggle('hide');
        clearButton.classList.toggle('hide');
    });
});

equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

clearAllButton.addEventListener('click', () => {
    calculator.clearAll();
    calculator.updateDisplay();
})


percentButton.addEventListener('click', () => {
    calculator.percentOf();
    calculator.updateDisplay();
})

revertButton.addEventListener('click', () => {
    calculator.revert();
    calculator.updateDisplay();
})