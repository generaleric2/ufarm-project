const userName = document.login.user;
const password1 = document.login.password1;

const userNameError = document.getElementById('usererr');
const password1Error = document.getElementById('passworderr1');


userName.addEventListener("blur", userName_Verify, true);
password1.addEventListener("blur", password1_Verify, true);


function Validate() {
    if (userName.value === "") {
        userNameError.textContent = "please fill in user name";
        userNameError.style = "1px solid red";
        userName.focus();
        return false;
    }
    if (password1.value === "") {
        password1Error.textContent = "please enter password";
        password1.style = "1px solid red";
        password1.focus();
        return false;
    }
}


const alphaNumeric = /^[0-9a-zA-Z]+$/;



function userName_Verify () {
    if (userName.value !== "" && userName.match(alphaNumeric)) {
        userName.style.border = "1px solid green";
        userNameError.textContent = "";
        return true;
    } else {
        userName.style.border = "1px solid red";
        userNameError.textContent = "userName is incorrect";
        userName.focus();
        return false;
    }
}

function password1_Verify () {
    if (password1.value !== "" && password1.value.match(alphaNumeric)) {
        password1.style.border = "1px solid green";
        password1Error.textContent = "";
        return true;
    } else {
        password1.style.border = "1px solid red";
        password1Error.textContent = "password1 is must contain only alphanumeric characters";
        password1.focus();
        return false;
    }
}