// Goal: We want to extract input from our people form then the user submits it.

const signUpForm     = document.querySelector('.form-signup');
const firstNameField = document.querySelector('.first-name');
const lasttNameField = document.querySelector('.last-name');
const emailField     = document.querySelector('.email');

// Page lifecycle events
window.onload = () => {
    console.log('App loaded..');
    signUpForm.classList.add('animated', 'bounceInLeft');
};

function sendData(data) {
    console.log('Creating user:', data);

    fetch("http://localhost:9090/api/v1/user", {
        method: "post",
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(data)
  })

   .then((response) => { 
        console.log('Shit back from API for confirmation');
  });
}

function submitForm(e) {
    e.preventDefault();

    let newUser = {
        firstName: firstNameField.value,
        lastName: lasttNameField.value,
        email: emailField.value
    };

    sendData(newUser);

    setTimeout(() => {
        console.log('Form Submitted');
        signUpForm.classList.add('animated', 'bounceOutRight');
        alert('Welcome To The People Store!');
    }, 500);
}
