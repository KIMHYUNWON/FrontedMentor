"use strict";

let firstName = document.querySelector("#firstName");
let secondName = document.querySelector("#secondName");
let emailAddress = document.querySelector("#emailAddress");
let password = document.querySelector("#password");

let error_first_name = document.querySelector("#error_first_name");
let error_second_name = document.querySelector("#error_second_name");
let error_email = document.querySelector("#error_email");
let error_password = document.querySelector("#error_password");

firstName.isClick = false;
secondName.isClick = false;
emailAddress.isClick = false;
password.isClick = false;

firstName.addEventListener("focus", function(){
    firstName.isClick = true;
});
firstName.addEventListener("blur",function(){
    if(firstName.isClick == true && firstName.value == ""){
        firstName.style.background = "url('./images/icon-error.svg') no-repeat 95% center";
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
        firstName.removeAttribute("placeholder");
        error_first_name.innerHTML = "First Name cannot be empty";
    }
    else if(firstName.isClick == true && firstName.value != ""){
        firstName.style.background = "none";
        firstName.style.border = "1px solid #ccc";
        error_first_name.innerHTML ="";
    }
});
secondName.addEventListener("click", function(){
    secondName.isClick = true;
});
secondName.addEventListener("blur",function(){
    if(secondName.isClick == true && secondName.value == ""){
        secondName.style.background = "url('./images/icon-error.svg') no-repeat 95% center";
        secondName.style.border = "2px solid hsl(0, 100%, 74%)";
        secondName.removeAttribute("placeholder");
        error_second_name.innerHTML = "Last Name cannot be empty";
    }
    else if(secondName.isClick == true && secondName.value != ""){
        secondName.style.background = "none";
        secondName.style.border = "1px solid #ccc";
        error_second_name.innerHTML ="";
    }
});
emailAddress.addEventListener("click", function(){
    emailAddress.isClick = true;
});
emailAddress.addEventListener("blur",function(){
    if(emailAddress.isClick == true){
        if(emailAddress.value == ""){
            emailAddress.style.background = "url('./images/icon-error.svg') no-repeat 95% center";
            emailAddress.style.border = "2px solid hsl(0, 100%, 74%)";
            emailAddress.removeAttribute("placeholder");
            error_email.innerHTML = "Email Address cannot be empty";
    
        }else if(!emailAddress.value.endsWith(".com")){
            emailAddress.style.background = "url('./images/icon-error.svg') no-repeat 95% center";
            emailAddress.style.border = "2px solid hsl(0, 100%, 74%)";
            emailAddress.style.color ="hsl(0, 100%, 74%)";
            error_email.innerHTML = "Looks like this is not an email";
        }else if(emailAddress.value != ""){
            emailAddress.style.background = "none";
            emailAddress.style.border = "1px solid #ccc";
            emailAddress.style.color = "#000";
            error_email.innerHTML ="";
        }
    }
});
password.addEventListener("click", function(){
    password.isClick = true;
});
password.addEventListener("blur",function(){
    if(password.isClick == true && password.value == ""){
        password.style.background = "url('./images/icon-error.svg') no-repeat 95% center";
        password.style.border = "2px solid hsl(0, 100%, 74%)";
        password.removeAttribute("placeholder");
        error_password.innerHTML = "Password cannot be empty";
    }
    else if(password.isClick == true && password.value != ""){
        password.style.background = "none";
        password.style.border = "1px solid #ccc";
        error_password.innerHTML ="";
    }
});

