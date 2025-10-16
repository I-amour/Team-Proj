//no-space
//Your new code for animation toggling
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
//no-space
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
//no-space
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
//no-space
// --- Other features from my original script ---
//no-space
//Password validation
const passwordInput = document.getElementById('signup-password');
const passwordError = document.getElementById('password-error');
//no-space
passwordInput.addEventListener('keyup', () => {
    if (passwordInput.value.length < 8) {
        passwordError.classList.add('visible');
    } else {
        passwordError.classList.remove('visible');
    }
});
//no-space
//Prevent forms from submitting (front-end demo)
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
//no-space
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Log In Submitted! (Front-end only demo)');
});
//no-space
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up Submitted! (Front-end only demo)');
});