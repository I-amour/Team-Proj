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

    // Hard-coded login check
    const email = loginEmail.value;
    const password = loginPassword.value;

    let userEmail = null;
    let redirectUrl = null;

    if (email === 'user@makeitall.com' && password === 'password123') {
        // Team Member
        userEmail = 'user@makeitall.com';
        redirectUrl = 'user/projects.html'; 
    
    } else if (email === 'specialist@makeitall.com' && password === 'password123') {
        // Technical Specialist
        userEmail = 'specialist@makeitall.com';
        redirectUrl = 'user/projects.html'; // All users land on projects first
    
    } else if (email === 'manager@makeitall.com' && password === 'password123') {
        // Manager
        userEmail = 'manager@makeitall.com';
        redirectUrl = 'user/projects.html';
    
    } else {
        // FAILURE: Show login error
        loginError.classList.add('visible');
    }

    if (userEmail && redirectUrl) {
        // SUCCESS: Redirect to the dashboard WITH the user query parameter
        alert('Login Successful! Redirecting...');
        // This query param is what tells app.js who is logged in
        window.location.href = `${redirectUrl}?user=${userEmail}`;
    }
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up Submitted! (Front-end only demo)');
});