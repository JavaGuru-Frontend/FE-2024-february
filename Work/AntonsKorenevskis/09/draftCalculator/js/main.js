// У нас уже приготовлена вёрстка для калькулятора
// нам необходимо добавить нужные addEventListener на кнопки и добавить функции которые будут вызываться на нажатие этих кнопок
// Результат вычеслений вывести в поле output используя метод innerHTML

let buttons = document.querySelectorAll('.btn');
let output = document.getElementById('output');
let equation = "";
let id = '';
let type = '';


let numberClicked = () => {
    if (output.innerText === "0") { //заменяем стоящий первым ноль в аутпуте
        equation = id;
        output.innerText = id;
        } else {
        equation += id;
        output.innerText += id;
        }

}

let operatorClicked = () => {
    // equation += id;
    // output.innerText += id;

    if  ((equation.endsWith( "-" )) || // делаем не более одного оператора подряд в выражении
         (equation.endsWith( "+" )) || 
         (equation.endsWith( "/" )) || 
         (equation.endsWith( "*")) ) { 
            equation = equation.slice(0, -1);
            equation += id; 
            output.innerText = output.innerText.slice(0, -1);
            output.innerText += id; 
        } else {
            equation += id;
            output.innerText += id;
        }
        



}

let equalClicked = () => {
    output.innerHTML = eval(equation);   
    // output.innerText += id; - закомментил добавление знака равно в аутпут -так красивее
}

let clearClicked = () => {
    equation = 0;
    output.innerText = 0;
}

document.addEventListener('keyup', (event) =>  {
    if (event.keyCode === 13) {
        equalClicked();
    } else {
        for (let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute('data-id');

            if (id == event.key) {
                buttons[i].click();
            }             
        }
    } 
}) 

document.addEventListener('keydown', (event) =>  { // Clear через Backspace, но костыльно
    if (event.keyCode === 8) {
        clearClicked();
    } else {

   } 
}) 



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        id = this.getAttribute('data-id')
        type = this.getAttribute('data-type');
        
        switch (type) {
            case 'clear':
                clearClicked();
                break;

            case 'number':
                numberClicked();
                break;

            case 'equal':
                equalClicked();
                break;

            case 'operator':
                operatorClicked();
                break;

             case 'dot':
                console.log('dot pressed');
                break;
    

            default: 
                console.log('default');
                break;
        }
    });
}


