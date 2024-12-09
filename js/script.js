let toggleNavigation = function() {
    let burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        if(burger.classList.contains('active')) {
            document.querySelector('.main-ul').style.opacity = 0;
            burger.classList.remove('active');
        }else {
            document.querySelector('.main-ul').style.opacity = 1;
            burger.classList.add('active');
        }
    });
}
toggleNavigation();