/*toggle nav*/ 

function toggleNav() {
    let burger = document.querySelector('.burger');
    let ul = document.querySelector('.main-ul');

    if(!burger || !ul) {
        alert('No navigation found');
        return;
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        ul.classList.toggle('active');
    });
}
toggleNav();

/*validate form*/

function formValidate() {
    let form = document.querySelector('.form');
    let nameLabel = document.querySelector('.label-name');
    let inputName = document.querySelector('#input-name');
    let emailLabel = document.querySelector('.label-email');
    let inputEmail = document.querySelector('#input-email');
    let messageLabel = document.querySelector('.label-message');
    let textArea = document.querySelector('#message');

    form.addEventListener('submit', (e) => {
      let isValid = true;
        if(inputName.value.trim() === '') {
            inputName.style.border = '1px solid red';
            nameLabel.textContent = 'Type your name';
            nameLabel.style.color = 'red';
            isValid = false;
        }

        if(inputEmail.value.trim() === '') {
            inputEmail.style.border = '1px solid red';
            emailLabel.textContent = 'Type your E-mail';
            emailLabel.style.color = 'red';
            isValid = false;
        }

        if(textArea.value.trim() === '') {
            textArea.style.border = '1px solid red';
            messageLabel.textContent = 'Type your message';
            messageLabel.style.color = 'red';
            isValid = false;
        }

        if(isValid) {
            form.submit();
        }else {
            e.preventDefault();
        }
    });
}
formValidate();


