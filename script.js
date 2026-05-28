const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 25px #7a5cff';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

const password = document.getElementById('password');
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('click', () => {

    if(password.type === 'password'){
        password.type = 'text';
    } else {
        password.type = 'password';
    }

});