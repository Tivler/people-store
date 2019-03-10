// Goal: We want to extract input from our people form then the user submits it.
// When the user submits the form we want to create a JavaScript object like the following firstName: 'Tim', lastName: 'McKyer', email: 'tim@tim.{com'}

const signUpForm =  document.querySelector('.form-signup');
const firstNameField = document.querySelector('.first-name');
const lasttNameField = document.querySelector('.last-name');
const emailField = document.querySelector('.email');

function sendData(newUser) {
    console.log('Creating new user:', newUser);
}

function submitForm() {

    let newUser = {
        firstName: firstNameField.value,
        lastName: lasttNameField.value,
        email: emailField.value
    };

    console.log('new user:', newUser);

}