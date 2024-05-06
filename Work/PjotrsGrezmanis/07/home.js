


function appendToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculate() {
    try {
        let input = document.getElementById('input').value;
        let result = eval(input); 
        document.getElementById('input').value = result;
    } catch (error) {
        document.getElementById('input').value = 'Ошибка';
    }
}

