const firstName = document.register.firstName;
const lastName = document.register.lastName;
const email = document.register.email;
const phoneNumber = document.register.phonenumber;






const firstNameError = document.getElementById('firstnameerr');
const lastNameError = document.getElementById('lastnameerr');
const emailError = document.getElementById('emailerr');
const phoneNumberError = document.getElementById('phonenumbererr');




firstName.addEventListener("blur", firstName_Verify, true);
lastName.addEventListener("blur", lastName_Verify, true);
email.addEventListener("blur", email_Verify, true);
phoneNumber.addEventListener("blur",PhoneNumberVerify, true);
  





function Validate() {
  if (firstName.value === "") {
      firstNameError.textContent = "please fill in first name";
      firstName.style = "1px solid red";
      firstName.focus();
      return false;
  }
  if (lastName.value === "") {
      lastNameError.textContent = "please fill in last name";
      lastName.style = "1px solid red";
      lastName.focus();
      return false;
  }
  if (email.value === "") {
    emailError.textContent = "please fill in your email";
    emailError.style = "1px solid red";
    email.focus();
    return false;
  }
  if (phoneNumber.value === "") {
    phoneNumberError.textContent = "please enter phone number";
    phoneNumberError.style = "1px solid red";
    phoneNumber.focus();
    return false;
}
}



const firstNameRegex = /^.{3,15}[a-zA-Z]+$/;
const lastNameRegex = /^.{3,15}[a-zA-Z]+$/;
const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex =  /^\d{10}$/;



function firstName_Verify() {
  if (firstName.value !== "" && firstName.value.match (firstNameRegex)) {
      firstName.style.border = "1px solid green";
      firstNameError.textContent = "";
      return true;

  } else {
      firstName.style.border = "1px solid red";
      firstNameError.textContent = "first name must be atleast 3 characters";
      firstName.focus();
      return false;

  }
}

function lastName_Verify() {
  if (lastName.value !== "" && lastName.value.match(lastNameRegex)) {
    lastName.style.border = "1px solid green";
    lastNameError.textContent = "";
    return true;
  } else {
    lastName.style.border = "1px solid red";
    lastNameError.textContent ="last name is required";
    lastName.focus();
    return false;
  }
}


function email_Verify() {
    if (email.value !== "" && email.value.match(emailregex)) {
        email.style.border = "1px solid green";
        emailError.textContent = "";
        return true;
    } else {
        email.style.border = "1px solid red";
        emailError.textContent = "Email must be you@example.com";
        email.focus();
        return false;
    }
}

function PhoneNumberVerify() {
    if (phoneNumber.value !== "" && phoneNumber.value.match(phoneRegex)) {
        phoneNumber.style.border = "1px solid green";
        phoneNumberError.textContent = "";
        return true;
    } else {
         phoneNumber.style.border = "1px solid red";
         phoneNumberError.textContent = "Phone is required";
         phoneNumber.focus();
         return false;
    }
}