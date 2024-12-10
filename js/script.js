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




function animation() {

    const options = {
        rootMargin:'0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }else {
                return;
            }
        })
    }, options)
    const aboutMe = document.querySelector('main #about figure');
    observer.observe(aboutMe);
}
animation();