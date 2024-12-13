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
        rootMargin:'0px 0px -300px 0px'
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
    const skill = document.querySelectorAll('main #skill .skill-wrapper .skill-list article');
    skill.forEach(skills => {
        observer.observe(skills);
    });
    const skillImg = document.querySelector('main #skill .skill-wrapper figure');
    observer.observe(skillImg);

    const project = document.querySelectorAll('.project-container');
    project.forEach(projects => {
        observer.observe(projects);
    });
}
animation();

let formValidation = function() {

}
formValidation();