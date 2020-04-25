const firstName = document.querySelector('#firstName').value;
const firstNameError = document.getElementById('firstNameError');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitButton = document.querySelector('#submitButton');


submitButton.addEventListener('click', () => {
    if (firstName == null || firstName == '') {
        let nameError = "First Name cannot be empty";
        firstNameError.innerHTML = nameError;
        firstNameError.parentNode.style.display = 'block';
    }

})

// https://stackoverflow.com/questions/32708271/individual-error-messages-for-empty-form-fields-using-javascript/32708396

// grab each input 
// grab submit button 
// add event listener

// check each input for text 

// if any text inputs empty, append warning to DOM
// if email does not contain '@', append warning to DOM