
function promptNumber(message) {
    let input;
    do {
        input = prompt(message);
    } while (input === null || isNaN(input) || input.trim() === '');
    return Number(input);
}


function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return NaN;
    }
}


const number1 = promptNumber('Введите первое число:');


const operation = prompt('Введите операцию (+, -, *, /):');


const number2 = promptNumber('Введите второе число:');


const result = calculate(number1, operation, number2);


if (isNaN(result)) {
    alert('Некорректная операция!');
} else {
    alert(`Результат: ${result}`);
}