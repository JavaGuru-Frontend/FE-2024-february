let buttons = document.querySelectorAll('.btn');
let output = document.getElementById('output');
let equation = "";
let id = '';
let type = '';
let historyList = JSON.parse(localStorage.getItem('history')) || [];
let eventHandlers = [];


let historyEl = document.getElementById('history');

function updateOutput() {
    output.innerHTML = equation;
}


function clearCalculator() {
    equation = '';
    updateOutput();
}



document.addEventListener('keydown', (event) => {
    //  клавиша "Esc" (код клавиши 27)
    if (event.keyCode === 27) {
        clearCalculator();
    }
});

function addEventListeners() {
    buttons.forEach(button => {
        const handler = function () {
            id = this.getAttribute('data-id');
            type = this.getAttribute('data-type');

            switch (type) {
                case 'clear':
                    console.log('clear pressed');
                    clearCalculator();
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

                case 'symbol':
                    symbolClicked();
                    break;

                default:
                    console.log('default');
                    break;
            }
        };

        button.addEventListener('click', handler);
        eventHandlers.push({ button, handler });
    });
}



function removeEventListeners() {
    eventHandlers.forEach(({ button, handler }) => {
        button.removeEventListener('click', handler);
    });
    eventHandlers = [];
}


function saveToLocalStorage() {
    historyList.push(`${equation}=${eval(equation)}`);
    localStorage.setItem('history', JSON.stringify(historyList));
}
function loadFromLocalStorage() {
    historyEl.innerHTML = '';
    let steps = JSON.parse(localStorage.getItem('history')) || [];
    steps.forEach(step => {
        historyEl.innerHTML += `<li>${step}</li>`;
    });
}

function equalClicked () {
    saveToLocalStorage();
    equation = eval(equation).toString();
    updateOutput();
    loadFromLocalStorage();
}

function operatorClicked() {
    equation += id;
    updateOutput();
}

function numberClicked() {
    equation += id;
    updateOutput();
}

function symbolClicked ()  {
    equation += id;
    updateOutput();
}

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        equalClicked();
    } else {
        const button = [...buttons].find(button => button.getAttribute('data-id') === event.key);
        if (button) {
            button.click();
        }
    }
})

loadFromLocalStorage();
addEventListeners();

