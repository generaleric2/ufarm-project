const firstName = document.register.firstName;
const lastName = document.register.lastName;
const email = document.register.email;
const phoneNumber = document.register.phonenumber;
const dateOfBirth = document.register.dateb;
const gender = document.register.gender;
const ward = document.register.ward;
const createPassword = document.register.password;
const confirmPassword = document.register.cfrmPassword;






const firstNameError = document.getElementById('firstnameerr');
const lastNameError = document.getElementById('lastnameerr');
const emailError = document.getElementById('emailerr');
const phoneNumberError = document.getElementById('phonenumbererr');
const dateOfBirthError = document.getElementById('doberr');
const genderError = document.getElementById('gendererr');
const wardError = document.getElementById('warderr');
const createPasswordError = document.getElementById('passworderr');
const confirmPasswordError = document.getElementById('cfrmpwderr');




firstName.addEventListener("blur", firstName_Verify, true);
lastName.addEventListener("blur", lastName_Verify, true);
email.addEventListener("blur", email_Verify, true);
phoneNumber.addEventListener("blur",PhoneNumberVerify, true);
dateOfBirth.addEventListener("blur", dateOfBirth_Verify, true);
gender.addEventListener("blur", gender_Verify, true);
ward.addEventListener("blur", ward_Verify, true);
createPassword.addEventListener("blur", create_Verify, true);
// confirmPassword.addEventListener("blur", confirm_Verify, true);
  





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
  if (createPassword.value === "") {
    createPasswordError.textContent = "please fill in your password";
    createPasswordError.style = "1px solid red";
    createPassword.focus();
    return false;
  }
  // if (confirmPassword.value === "") {
  //   confirmPasswordError.textContent = "please confirm your password";
  //   confirmPasswordError.style = "1px solid red";
  //   confirmPassword.focus();
  //   return false;
  // }
  if (gender.value === "selected") {
    genderError.textContent = "please enter a gender";
    genderError.style = "1px solid red";
    gender.focus();
    return false;
  }
  if (ward.value === "") {
    wardError.textContent = "please fill in your ward";
    wardError.style = "1px solid red";
    ward.focus();
    return false;
  }
  if (dateOfBirth.value === "") {
    dateOfBirthError.textContent = "please fill in your date of birth";
    dateOfBirthError.style = "1px solid red";
    dateOfBirth.focus();
    return false;
  }
}



const firstNameRegex = /^.{3,15}[a-zA-Z]+$/;
const lastNameRegex = /^.{3,15}[a-zA-Z]+$/;
const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex =  /^\d{10}$/;
const passregex = /^[A-Z][a-zA-Z0-9]{5,11}$/
const wardregex = /^ward [1-4]$/
const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(20(0[9-9]|1[0-9]|2[0-9]))$/;
const genderRegex = /^(male|female)$/;



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

function ward_Verify() {
  if (ward !== ""&& ward.value.match (wardregex)) {
    ward.style.border = "1px solid green";
    wardError.textContent = "";
    return true;
  } else {
    ward.style.border = "1px solid red";
    wardError.textContent = "please enter your ward";
    ward.focus();
    return false;
  }
}

function create_Verify() {
  if (createPassword !== ""&& createPassword.value.match (passregex)) {
    createPassword.style.border = "1px solid green";
    createPasswordError.textContent = "";
    return true;
  } else {
    createPassword.style.border = "1px solid red";
    createPasswordError.textContent = "please create a password";
    createPassword.focus();
    return false;
  }
}

function confirm_Verify() {
  if (confirmPassword !== "" && confirmPassword.value.match (passregex)) {
    confirmPassword.style.border = "1px solid green";
    confirmPasswordError.textContent = "";
    return true;
  } else {
    confirmPassword.style.border = "1px solid red";
    confirmPasswordError.textContent = "please confirm your password";
    confirmPassword.focus();
    return false;
  }
}

function dateOfBirth_Verify() {
  if (dateOfBirth.value !== "" && dateOfBirth.value.match (dobRegex)) {
    dateOfBirth.style.border = "1px solid green";
    dateOfBirthError.textContent = "";
    return true;
  } else {
    dateOfBirth.style.border = "1px solid red";
    dateOfBirthError.textContent = "please enter valid date of birth";
    dateOfBirth.focus();
    return false;
  }
}

function gender_Verify() {
  if (gender !== "" && gender.value.match (genderRegex)) {
    gender.style.border = "1px solid green";
    genderError.textContent = "";
    return true;
  } else {
    gender.style.border = "1px solid red";
    genderError.textContent = "please enter your gender";
    gender.focus();
    return false;
  }
}