let num1;
let num2;
let operator;

let calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            console.log(num1 + num2);
            runApplication();
            break;
         case "-":
            console.log(num1 - num2);
            runApplication();
            break;  
        case "*":
            console.log(num1 * num2);
            runApplication();
            break;
        case "/":
            console.log(num1 / num2);
            runApplication();
            break;          
    }
}

let showErrorMessage = (errorValue) => {
    console.log(`${errorValue} is not a number`);
}

let checkValues = (num1, num2, operator) => { //если не добавить operator сюда, то в calculate он попадал undefined
    if ( isNaN(num1) === true || isNaN(num2) === true  ) {
        let errorValue = '';
        if (isNaN(num1) === true) {
            errorValue = "First input";
        } else {
            errorValue = "Second input";
        }
        
        showErrorMessage(errorValue);
    } else {
        calculate(num1, num2, operator);
    }
}

let runApplication = () => {
    debugger
    let num1 = Number(prompt("Enter first number"));
    let num2 = Number(prompt("Enter second number"));
    let operator = prompt("Enter an operator * / + -");  

    checkValues(num1, num2, operator);
}

runApplication();












 
