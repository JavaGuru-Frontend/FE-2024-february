
const number1 = Number(prompt('Введите первое число'))
const math = prompt('Введите математический знак')
const number2 = Number(prompt('Введите второе число'))

if ('+' === math) {
    const res = number1 + number2;
    alert(`${number1} ${math} ${number2} = ${res}`)
} else if ('-' === math) {
    const res = number1 - number2;
    alert(`${number1} ${math} ${number2} = ${res}`)
} else if ('*' === math) {
    const res = number1 * number2;
    alert(`${number1} ${math} ${number2} = ${res}`)
} else if (`/` === math) {
    const res = number1 / number2;
    if (number2 === 0) {
        alert('Нелья делить на нуль')
    } else {
        alert(`${number1} ${math} ${number2} = ${res}`)

    }
}