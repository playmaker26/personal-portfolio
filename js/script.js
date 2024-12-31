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

let formValidation = function () {
    let form = document.querySelector(".contact");
    let name = document.querySelector("#name");
    let subject = document.querySelector("#subject");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");
  
    form.addEventListener("submit", (e) => {
      let isValid = true;
  
      // Name Validation
      if (name.value.trim() === "") {
        document.querySelector(".name-label").style.color = "#FF0000";
        document.querySelector(".name-label").textContent = "Type your name";
        isValid = false;
      }
  
      // Subject Validation
      if (subject.value.trim() === "") {
        document.querySelector(".subject-label").style.color = "#FF0000";
        document.querySelector(".subject-label").textContent = "Type a subject";
        isValid = false;
      }
  
      // Email Validation
      if (email.value.trim() === "") {
        document.querySelector(".email-label").style.color = "#FF0000";
        document.querySelector(".email-label").textContent = "Type your email";
        isValid = false;
      }
  
      // Message Validation
      if (message.value.trim() === "") {
        document.querySelector(".message-label").style.color = "#FF0000";
        document.querySelector(".message-label").textContent = "Type your message";
        isValid = false;
      }
  
      // Prevent form submission if any field is invalid
      if (!isValid) {
        e.preventDefault();
      }
    });
  };
  
  formValidation();
    