let userName = document.getElementById('username');
let password = document.getElementById('password');
let error = document.querySelector('.form-msg-error');
let submit = document.getElementById('submit');

let forgetpass = document.querySelector('.form-link');
let hint = document.querySelector('.hint');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (userName.value === 'pikachu' && password.value === 'pikachu') {
    location.href = 'PokemonCards.html';
  } else {
    error.innerHTML = 'Incorrect Username/Password combination';
  }
});

function onFocus() {
  error.innerHTML = ' ';
}

forgetpass.addEventListener('click', () => {
  hint.classList.toggle('hint');
});
