
import Calculator from '/calculator.js';
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const percentButton = document.querySelector('[data-percent]');
// const revertButton = document.querySelector('[data-revert');
const clearAllButton = document.querySelector('[data-all-clear]');
// const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
export const prevNumber = document.querySelector('[data-previous]');
export const currentNumber = document.querySelector('[data-current]');

const calculator = new Calculator(prevNumber, currentNumber);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperation(button.innerText);
        calculator.updateDisplay();
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

// clearButton.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// })

// if(calculator.currentNumber) {
//     clearButton.classList.remove('hide');
//     clearAllButton.classList.add('hide');
// }else {
//     clearAllButton.classList
// }

percentButton.addEventListener('click', () => {
    calculator.percentOf();
    calculator.updateDisplay();
})

// revertButton.addEventListener('click', () => {
//     calculator.revert();
//     calculator.updateDisplay();
//     revertButton.classList.toggle('negative-active');

//     if (calculator.prevNumber) {
//         revertButton.classList.toggle('negative-active');
//     }
// })