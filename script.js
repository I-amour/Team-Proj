
//code for animation toggling
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
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginError = document.getElementById('login-error'); 

signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    loginError.classList.remove('visible'); // Hide error on new attempt

    // Hard-coded login check (demo only)
    const email = loginEmail.value;
    const password = loginPassword.value;

    if (email === 'user@makeitall.com' && password === 'password123') {
        // SUCCESS: Redirect to the dashboard
        alert('Login Successful! Redirecting...');
        window.location.href = 'user/dashboard.html';
    } else {
        // FAILURE: Show login error
        loginError.classList.add('visible');
    }
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up Submitted! (Front-end only demo)');
});

