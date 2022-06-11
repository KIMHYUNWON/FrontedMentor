"use strict";

let emailInput = document.querySelector("#emailInput");
let errorMessage = document.querySelector("#errorMessage");

emailInput.addEventListener("blur", function(){
    if(!emailInput.value.endsWith(".com")){
        errorMessage.innerHTML = "Please provide a valid email address";
        emailInput.style.border = "3px solid hsl(354, 100%, 66%)";
        emailInput.isError = true;
    }else{
        emailInput.isError = false;
        emailInput.style.border = "1px solid hsl(223, 100%, 88%)";
        errorMessage.innerHTML = "";
    }
});