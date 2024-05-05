


let number1, number2, operator;


number1 = prompt("Введите первое число:");
number2 = prompt("Введите второе число:");
operator = prompt("Введите математический оператор (+, -, *, /):");


number1 = Number(number1);
number2 = Number(number2);


let result;

switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            console.log("Ошибка: деление на ноль!");
            result = undefined;
        }
        break;
    default:
        console.log("Ошибка: некорректный оператор!");
        result = undefined;
}


console.log(`Результат: ${result}`);

