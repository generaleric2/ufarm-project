const Validate = (event) => {
    let error = 0
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let uniqueNumber = document.getElementById('uniqueNumber')
    let password = document.getElementById('password')
    let role = document.getElementById('role')
    let ninNumber = document.getElementById('ninNumber')
    let residentType = document.getElementById('residenceType')
    let periodOfStay = document.getElementById('period')
    let dateOfRegistration = document.getElementById('regDate')
    let dateOfBirth = document.getElementById('birthDate')
    let male = document.getElementById('gender1')
    let female = document.getElementById('gender2')
    let ward = document.getElementById('wardName')
    let streetName = document.getElementById('streetName')
    let houseNumber = document.getElementById('houseNumber')
    let activities = document.getElementById('activities')
    let phonenumber = document.getElementById('phonenumber')



    let firstNameError = document.getElementById('firstnameerr')
    let lastNameError = document.getElementById('lastnameerr')
    let uniqueNumberError = document.getElementById('uniquenumbererr')
    let passwordError = document.getElementById('passworderr')
    let roleError = document.getElementById('roleerr')
    let ninNumberError = document.getElementById('ninnumbererr')
    let phoneNumerError = document.getElementById('phonenumbererr')
    let residentTypeError = document.getElementById('resierr')
    let periodOfStayError = document.getElementById('perror')
    let dateOfRegistrationError = document.getElementById('derror')
    let dateOfBirthError = document.getElementById('birthdateerr')
    let genderError = document.getElementById('genderradioerr')
    let wardError = document.getElementById('warderr')
    
    // first name
    if(firstName.value == ""){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please fill in First Name"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }

    else if(firstName.value.length < 3){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please fill in First Name must be atleast 3 characters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if(firstName.value.length > 11){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be less than 11 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    } else {
        firstName.style.border = "1px solid green"
        firstNameError.innerHTML = ""
    }
// last name
    if(lastName.value == ""){
        lastName.style.border = "1px solid red"
        lastNameError.innerHTML = "Please last name can not be empty"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if(lastName.value.length < 3){
        lastName.style.border = "1px solid red"
        lastNameError.innerHTML = "Please the last name must be atleast 3 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if(lastName.value.length > 11){
        lastName.style.border = "1px solid red"
        lastNameError.innerHTML = "Please the last name must be less than 11 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    } else {
        lastName.style.border = "1px solid green"
        lastNameError.innerHTML = ""
    }

    const unregex = /^AO-([0-9]{3})+$/;
    const ufregex = /^UF-([0-9]{3})+$/;
    const foregex = /^FO-([0-9]{3})+$/;
    if (uniqueNumber.value == "") {
        uniqueNumber.style.border = "1px solid red"
        uniqueNumberError.textContent = "Unique Number is required"
        uniqueNumberError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    } else if (!(uniqueNumber.value.match(unregex)  || uniqueNumber.value.match(ufregex) || uniqueNumber.value.match(foregex))){
        uniqueNumber.style.border = "1px solid red"
        uniqueNumberError.textContent = "Unique number must follow this formart AO-001";
        uniqueNumberError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    } else {
        uniqueNumber.style.border = "1px solid green"
        uniqueNumberError.textContent = ""

    }

















    if(error >0){
        event.preventDefault()
    }
}