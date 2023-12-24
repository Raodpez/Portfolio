const menuIcon = document.querySelector('#menu-icon') , menu = document.querySelector('#menu');

menuIcon.addEventListener('click' , (e) => {
    menu.classList.toggle('on');

    const actualRute = e.target.getAttribute('src');

    switch (actualRute) {
        case './images/open-menu.png':
            e.target.setAttribute('src' , './images/open-menu2.png');
            break;
    
        default:
            e.target.setAttribute('src' , './images/open-menu.png');
            break;
    }
});