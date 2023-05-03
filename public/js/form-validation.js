const firstName = document.registration.firstName;
const lastName = document.registration.lastName;






const firstNameError = document.getElementById('firstnameerr');
const lastNameError = document.getElementById('lastnameerr');



firstName.addEventListener("blur", firstName_Verify, true);
lastName.addEventListener("blur", lastName_Verify, true);
  





function FarmerOneForm() {
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
}



const firstNameRegex = /^.{3,15}[a-zA-Z]+$/;
const lastNameRegex = /^.{3,15}[a-zA-Z]+$/;



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