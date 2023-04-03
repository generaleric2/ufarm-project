const adminId = document.login.admin;
const password = document.login.password;



const adminIdError = document.getElementById('adminerr');
const passwordError = document.getElementById('passworderr');



adminId.addEventListener("blur", adminId_Verify, true);
password.addEventListener("blur", password_Verify, true);



function Validate() {
    if (adminId.value === "") {
        adminIdError.textContent = "please fill in your admin id";
        adminIdError.style = "1px solid red";
        adminId.focus();
        return false;
    }
    if (password.value === "") {
        passwordError.textContent = "please enter password";
        password.style = "1px solid red";
        password.focus();
        return false;
    }
   
}


const aoregex = /^AO-([0-9]{3})+$/;
const ufregex = /^UF-([0-9]{3})+$/; 
const foregex = /^FO-([0-9]{3})+$/;
const alphaNumeric = /^[0-9a-zA-Z]+$/; 



function adminId_Verify(foregex, aoregex, ufregex){
    if (adminId.value !== "" && adminId.match(foregex), "" && adminId.match(aoregex), "" && adminId.match(ufregex)) {
        document.style.border = "1px solid green";
        adminIdError.textContent = "";
        return true;
    } else {
        adminId.style.border = "1px solid red";
        adminIdError.textContent = "AdminId not Valid";
        adminId.focus();
        return false;
    }
}

function password_Verify () {
    if (password.value !== "" && password.value.match(alphaNumeric)) {
        password.style.border = "1px solid green";
        passwordError.textContent = ""
        return true;
    } else {
        password.style.border = "1px solid red";
        passwordError.textContent = "password is must contain only alphanumeric characters";
        password.focus();
        return false;
    }
}

