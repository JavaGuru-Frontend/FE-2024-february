let buttons = document.querySelectorAll('.btn');
let output = document.getElementById('output');
let equation = "";
let id = '';
let type = '';
let historyList = JSON.parse(localStorage.getItem('history')) || [];


let historyEl = document.getElementById('history');

function updateOutput() {
    output.textContent = currentInput;
}


function clearCalculator() {
    currentInput = '';
    currentOperator = '';
    updateOutput();
}



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        id = this.getAttribute('data-id');
        type = this.getAttribute('data-type');

        switch (type) {
            case 'clear':
                console.log('clear pressed');
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
            default:
                console.log('default');
                break;
        }
        
    });
}
let saveToLocalStorage = () => {
    historyList.push(`${equation}=${eval(equation)}`);
    localStorage.setItem('history', JSON.stringify(historyList));
}

let loadFromLocalStorage = () => {
    historyEl.innerHTML = '';
    let steps = JSON.parse(localStorage.getItem('history')) || [];
    for (let i = 0; i < steps.length; i++) {
        historyEl.innerHTML += `<li>${steps[i]}</li>`;
    }
}

let equalClicked = () => {
    saveToLocalStorage();

    output.innerHTML = eval(equation);
    equation = eval(equation);
    loadFromLocalStorage();
}

let operatorClicked  = () => {
    equation += id;
    output.innerText += id;
}

let numberClicked  = () => {
    equation += id;
    output.innerText += id;    
}

document.addEventListener('keyup', (event) => {
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

loadFromLocalStorage();

// buttons.forEach(element => {
//     element.addEventListener("click", () => {
//         console.log(element.getAttribute('data-id'));
//         console.log(element.getAttribute('data-type'));
//     });
// });