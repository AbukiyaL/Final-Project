const menuButton = document.querySelector('.menu');
const menuCont = document.querySelector('.menu-container');
menuButton.addEventListener('click', () => {
    menuCont.classList.toggle('active');
});