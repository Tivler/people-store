const FirstName = document.getElementById('FirstNameField');
const LastName = document.getElementById('LastNameField');
const Email = document.getElementById('EmailField');
const Submit = document.getElementById('SubmitButton');

//: You could probably rename the variable above to be a little bit more descriptive like: submitBtn, firstNameField... etc.

Submit.addEventListener('click' , function(){
    let fName = FirstName.value,
        lName = LastName.value,
        userEmail = Email.value;

    // log the value of what has been typed into each field... 
    console.log("SubmitButtonClicked");
    console.log('fName:', fName);
});
