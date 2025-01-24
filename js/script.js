/*Start of navigation function*/

let toggleNav = function() {
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
toggleNav();

/*End of navigation function*/

/*Start of form validation*/
let formValidation = function() {
const button = document.querySelector('.send');
const name = document.querySelector('#input-name');
const email = document.querySelector('#input-email');
const textarea = document.querySelector('#input-message');

button.addEventListener('click', (e) => {
e.preventDefault();

if(name.value.trim() === '' || name.value.trim() === null) {
  document.querySelector('.label-name').textContent = 'Type your name';
  document.querySelector('.label-name').style.color = ' #FF0000';
  name.style.border = '1px solid  #FF0000';
}

if(email.value.trim() === '' || email.value.trim() === null){
  document.querySelector('.label-email').textContent = 'Type your E-mail';
  document.querySelector('.label-email').style.color = ' #FF0000';
  email.style.border = '1px solid  #FF0000';
}

if(textarea.value.trim() === '' || textarea.value.trim() === null) {
  document.querySelector('.label-message').textContent = 'Type your message';
  document.querySelector('.label-message').style.color = ' #FF0000';
  textarea.style.border = '1px solid  #FF0000';
}
});
}
formValidation();
/*End of form validation*/ 