let buttons = document.querySelectorAll('.btn');
let output = document.getElementById('output');
let equation ='';
let id ='';
let type = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function(){
        id = this.getAttribute('data-id');
        type = this.getAttribute('data-type');
       
       
  switch (type){
    case 'clear':
        clearClicked();
        break;

        case 'number':
        numberClicked();
        break;

        case 'equal':
        equalClicked();
        break;

         case 'symbol':
       symbolClicked();
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

let equalClicked = () => {
    output.innerHTML = eval(equation)
}


let clearClicked = () =>{
   output.textContent = ''
}
let symbolClicked = () =>{
    equation += id;
    output.innerText += id;
}


let numberClicked = () =>{
    equation += id;
    output.innerText += id;
    
}


let operatorClicked = () =>{
     equation += id;
    output.innerText += id;
}