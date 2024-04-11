function showHide() {
    let element = document.getElementById('myLinks');
    if (element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}