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
    const contactInfo = document.querySelector('.contact-info');
    observer.observe(contactInfo);
    const contactForm = document.querySelector('.contact');
    observer.observe(contactForm);
}
animation();

let formValidation = function() {
let name = document.querySelector('#name')
let subject = document.querySelector('#subject');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let form = document.querySelector('.contact');

form.addEventListener('submit', (e) =>{
   
    if(name.value === '' || name.value === null) {
        document.querySelector('.name-label').style.color = '#FF0000';
        document.querySelector('.name-label').textContent = 'Type your name';
        e.preventDefault();
    }

    if(subject.value === '' || subject.value === null) {
        document.querySelector('.subject-label').style.color = '#FF0000';
        document.querySelector('.subject-label').textContent = 'Type your a subject';
        e.preventDefault();
    }

    if(email.value === '' || email.value === null) {
        document.querySelector('.email-label').style.color = '#FF0000';
        document.querySelector('.email-label').textContent = 'Type your E-mail';
        e.preventDefault();
    }

    if (message.value === '' || message.value === null) {
        document.querySelector('.message-label').style.color = '#FF0000';
        document.querySelector('.message-label').textContent = 'Type your message';
        e.preventDefault();
    }
});

}
formValidation();