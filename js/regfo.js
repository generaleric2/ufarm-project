const firstName = document.register.firstName;
    const lastName = document.register.lastName;
    const uniqueNumber = document.register.uniqueNumber;
    const password = document.register.password;
    const role = document.register.role;
    const ninNumber = document.register.ninNumber;
    const phoneNumber = document.register.phonenumber;
    const residentType = document.register.residenceType;
    const periodOfStay = document.register.period;
    const dateOfRegistration = document.register.regDate;
    const dateOfBirth = document.register.birthDate;
    const male = document.register.gender1;
    const female = document.register.gender2;
    const ward = document.register.wardName;
    const streetName = document.register.streetName;
    const houseNumber = document.register.houseNumber;
    const activities = document.register.activities;
    
    



    const firstNameError = document.getElementById('firstnameerr');
    const lastNameError = document.getElementById('lastnameerr');
    const uniqueNumberError = document.getElementById('uniquenumbererr');
    const passwordError = document.getElementById('passworderr');
    const roleError = document.getElementById('roleerr');
    const ninNumberError = document.getElementById('ninnumbererr');
    const phoneNumberError = document.getElementById('phonenumbererr');
    const residentTypeError = document.getElementById('resierr');
    const periodOfStayError = document.getElementById('perror');
    const dateOfRegistrationError = document.getElementById('derror');
    const dateOfBirthError = document.getElementById('birthdateerr');
    const genderError = document.getElementById('genderradioerr');
    const wardError = document.getElementById('warderr');
    


    firstName.addEventListener("blur", firstNameVerify, true);
    lastName.addEventListener("blur", lastNameVerify, true);
    uniqueNumber.addEventListener("blur", uniqueNumberVerify, true);
    password.addEventListener("blur", passwordVerify, true);
    role.addEventListener("blur", roleVerify, true);
    ninNumber.addEventListener("blur", ninNumberVerify, true);
    phoneNumber.addEventListener("blur",PhoneNumberVerify, true);
    residentType.addEventListener("blur", residentVerify, true);
    periodOfStay.addEventListener("blur", periodVerify, true);
    dateOfBirth.addEventListener("blur", dateOfBirthVerify, true);
    gender.addEventListener("blur", genderVerify, true);
    ward.addEventListener("blur", wardVerify, true);
    

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
        if (uniqueNumber.value === "") {
            uniqueNumberError.textContent = "please fill in unique number";
            uniqueNumber.style = "1px solid red";
            uniqueNumber.focus();
            return false;
        }
        if (password.value === "") {
            passwordError.textContent = "please enter password";
            password.style = "1px solid red";
            password.focus();
            return false;
        }
        if (role.value === "") {
            roleError.textContent = "please fill in role";
            role.style = "1px solid red";
            role.focus();
            return false;
        }
        if (ninNumber.value === "") {
            ninNumberError.textContent = "please fill in your nin number";
            ninNumber.style = "1px solid red";
            ninNumber.focus();
            return false;
        }
        if (phoneNumber.value === "") {
            phoneNumberError.textContent = "please enter phone number";
            phoneNumberError.style = "1px solid red";
            phoneNumber.focus();
            return false;
        }
        if (residentType.value === "") {
            residentTypeError.textContent = "please fill in residence type";
            residentTypeError.style = "1px solid red";
            residentType.focus();
            return false;
        }
        if (periodOfStay.value === "") {
            periodOfStayError.textContent = "please fill in period of stay";
            periodOfStayError.style = "1px solid red";
            periodOfStay.focus();
            return false;
        }
        if (dateOfBirth.value === "") {
            dateOfBirthError.textContent = "please enter your date of birth";
            dateOfBirthError.style = "1px solid red";
            dateOfBirth.focus();
            return false;
        }
        if (gender[0].checked === false && gender[1].checked === false) {
            genderError.textContent = "please fill in male or female";
            genderError.style = "1px solid red";
            return false;
        }   else {
            genderError.innerHTML = "";
        }
        if (ward.value === "") {
            wardError.textContent = "please fill in your ward";
            wardError.style = "1px solid red";
            ward.focus();
            return false;
        } 
    }

    const firstNameRegex = /^.{3,15}[a-zA-Z]+$/;
    const lastNameRegex = /^.{3,15}[a-zA-Z]+$/;
    const alphaNumeric = /^[0-9a-zA-Z]+$/; 
    const ninRegex = /^[0-9a-zA-Z]{13}$/; 
    const phoneRegex =  /^\d{10}$/;
   



    function firstNameVerify() {
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

    function lastNameVerify() {
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

    function uniqueNumberVerify() {
        if (uniqueNumber.value !== "" && uniqueNumber.value.match(aoregex, foregex, ufregex)) {
            uniqueNumber.style.border = "1px solid green";
            uniqueNumberError.textContent = ""
            return true;
        } else{
            uniqueNumber.style.border = "1px solid red";
            uniqueNumberError.textContent = "unique number is required";
            uniqueNumber.focus();
            return false;
        }
        
    }

    function passwordVerify () {
        if (password.value !== "" && password.value.match(alphaNumeric)) {
            password.style.border = "1px solid green";
            passwordError.textContent = ""
            return true;
        } else {
            password.style.border = "1px solid red";
            passwordError.textContent = "password is required";
            password.focus();
            return false;
        }
    }

    function roleVerify () {
        if (role.value !== "") {
            role.style.border = "1px solid green";
            roleError.textContent = "";
            return true;
        } else {
            return false;
        }
    }

    function genderVerify () {
        if (gender.value !== "") {
            gender.style.border = "1px solid green";
            genderError.textContent = "";
            return true;
        } else {
            return false;
        }
    }

    function dateOfBirthVerify() {
        if (dateOfBirth.value !== "") {
            dateOfBirth.style.border = "1px solid green";
            dateOfBirthError.textContent = "";
            return true;
        } else {
            return false;
        }
    }

    function ninNumberVerify () {
        if (ninNumber.value !== "" && ninNumber.value.match(ninRegex)) {
            ninNumber.style.border = "1px solid green";
            ninNumberError.textContent = "";
            return true;
        } else {
            ninNumber.style.border = "1px solid red";
            ninNumberError.textContent = "Nin must be atleast 13 characters";
            ninNumber.focus();
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

    

    
















  