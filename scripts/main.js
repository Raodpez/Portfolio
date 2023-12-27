const menuIcon = document.querySelector('#menu-icon') , menu = document.querySelector('#menu');
const themeButton = document.querySelector('#themebutton');

menuIcon.addEventListener('click' , (e) => {
    menu.classList.toggle('on');

    if(themeButton.classList.contains('light')){
        const actualRute = e.target.getAttribute('src');
        switch (actualRute) {
            case './images/open-menu.png':
                e.target.setAttribute('src' , './images/open-menu2.png');
                break;
        
            default:
                e.target.setAttribute('src' , './images/open-menu.png');
                break;
        }
    }
});


themeButton.addEventListener('click' , (e) => {
    themeButton.classList.toggle('dark');    
    themeButton.classList.toggle('light');

    document.body.classList.toggle('dark-body');
    document.body.classList.toggle('light-body');
});