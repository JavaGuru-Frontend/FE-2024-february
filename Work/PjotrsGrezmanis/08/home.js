document.addEventListener('keydown', function (event) {

    let keyPressed = event.key;


    if (/[0-9]/.test(keyPressed)) {
        alert(`Вы нажали цифру "${keyPressed}"`);
    } else if (/[a-zA-Z]/.test(keyPressed)) {

        alert(`Вы нажали букву "${keyPressed}"`);
    } else {

        alert(`Вы нажали другую клавишу "${keyPressed}"`);
    }
});