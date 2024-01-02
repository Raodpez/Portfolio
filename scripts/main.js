const menuIcon = document.querySelector('#menu-icon') , menu = document.querySelector('#menu');
const themeButton = document.querySelector('#themebutton');
const userName = document.querySelector('#allbutemail') , userNameLabel = document.querySelector('#allbutemaillabel') , emailBack = document.querySelector('#emailback') , emailBackLabel = document.querySelector('#emailbacklabel'), waySelector = document.querySelector('#way');

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

document.body.addEventListener('click' , (e) => {
    if(waySelector.selectedIndex == 0){
        userNameLabel.classList.add('hidden');
        userName.classList.add('hidden');
    
        emailBack.classList.remove('hidden');
        emailBackLabel.classList.remove('hidden');
    }else{
        emailBackLabel.classList.add('hidden');
        emailBack.classList.add('hidden');
    
        userName.classList.remove('hidden');
        userNameLabel.classList.remove('hidden');

        switch(waySelector.selectedIndex){
            case 3 : 
                userName.setAttribute('placeholder' , 'ej.@Raodpez')
                break;
            default:
                userName.setAttribute('placeholder' , 'ej.Raodpez')
                break;
        }
    }
})

