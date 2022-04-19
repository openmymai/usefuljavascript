function performOperation({ firstOperand, secondOperand, operator }) {
    const firstNumber = Number(firstOperand);
    const secondNumber = Number(secondOperand);

    switch (operator) {
        case '÷':
            return firstNumber / secondNumber;
        case '×':
            return firstNumber * secondNumber;
        case '-':
            return firstNumber - secondNumber;
        default:
            return firstNumber + secondNumber;
    }
}

function formatNumberByLocale(value) {
    if (/\.$/.test(value)) {
        return value;
    }
    return Number(value).toLocaleString(window.navigator.language || 'en-GB', {});
}

function getOperand({ operator }) {
    return !operator ? 'firstOperand' : 'secondOperand';
}

export { performOperation, formatNumberByLocale, getOperand };
