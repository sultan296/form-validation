function validateName() {

    let name = document.getElementById("contact-name");
    let nameError = document.getElementById("name-error");
    if (name.value.length == 0) {

        nameError.innerHTML = "Name is required";
        return false;
    }
    else if (!name.value.match(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/)) {
        nameError.innerHTML = "Enter full name";
        return false;
    } else {
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

function validatePhone() {

    let phone = document.getElementById("contact-phone");
    let phoneError = document.getElementById("phone-error");

    if (phone.value.length == 0) {
        phoneError.innerHTML = "Number is required";
        return false;
    } else if (!phone.value.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Enter 10 Digit Phone Number";
        return false;
    } else {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        return true;
    }
}

function validateEmail() {
    
    let email = document.getElementById("contact-email");
    let emailError = document.getElementById("email-error");

    if (email.value.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    } else if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "Invalid email";
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        return true;
    }
}

function validateMessage() {
    let message = document.getElementById("contact-message");
    let messageError = document.getElementById("message-error");
    let calNum = 30;
    let total = calNum - message.value.length; 

    if (message.value.length == 0) {
        messageError.innerHTML = "Message is required";
        return false;
    } else if(message.value.length < 30){
        messageError.innerHTML = total + " more characters are required"
        return false;
    } else{
        messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        return true;
    }
}

function validateForm() {
    let submitError = document.getElementById("submit-error");

    if (!validateName() || !validatePhone()|| !validateEmail()|| !validateMessage() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please complete all the details";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    } else {
        alert("Form has been submitted successfully");
        return true;
    }
}