document.addEventListener('keydown', (event) => {

    if (isNaN(event.key)) {
        document.getElementById('title').innerHTML = 
        'это буква';
        return; 
    } else if (isNaN(event.key) === false) {
        document.getElementById('title').innerHTML = 
            'это цифра';
        }  else  {
            document.getElementById('title').innerHTML = 
            'неизвестная кнопка'; 
    
        }
    }
)

// не все кнопки корректно распознает. Пробел, знакие препинания и тд