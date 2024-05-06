
let number1, number2, operator;


number1 = prompt('Введите первое число:');
number2 = prompt('Введите второе число:');
operator = prompt('Введите оператор (+, -, *, /):');


number1 = parseFloat(number1); 
number2 = parseFloat(number2);


let result;
switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            result = 'Деление на ноль невозможно';
        }
        break;
    default:
        result = 'Некорректный оператор';
}


console.log(`Результат: ${result}`);