
//Your new code for animation toggling
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// --- Other features from my original script ---
//Password validation
const passwordInput = document.getElementById('signup-password');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('keyup', () => {
    if (passwordInput.value.length < 8) {
        passwordError.classList.add('visible');
    } else {
        passwordError.classList.remove('visible');
    }
});

//Prevent forms from submitting (front-end demo)
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Log In Submitted! (Front-end only demo)');
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up Submitted! (Front-end only demo)');
});

//Mobile form switching
function handleMobileView() {
    if (window.innerWidth <= 600) {
        // Show only sign-in by default on mobile
        document.querySelector('.sign-up-container').style.display = 'none';
    }
}

window.addEventListener('resize', handleMobileView);
handleMobileView();