const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
    if (window.innerWidth < '768') {
        if (e.target && e.target.childNodes) {
            menuButton.checked = false;
        }
    }
})