let links = document.querySelectorAll('a[href*="#"]');

for(let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault();
        let element = this;
        let anchor = element.getAttribute('href').substring(1);
        let focusElement = document.getElementById(anchor);
        window.scrollTo({
            top: focusElement.offsetTop -20,
            behavior: "smooth"
        });
    }

} 