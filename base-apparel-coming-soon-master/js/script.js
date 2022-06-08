let emailInput = document.querySelector("#email");
let errorMSG = document.querySelector("#errorMSG");

emailInput.addEventListener("blur", function(){
    if(!emailInput.value.endsWith("@email.com")){
        emailInput.style.border = "3px solid hsl(0, 93%, 68%)";
        emailInput.style.background = "url('./images/icon-error.svg') no-repeat 75% center";
        errorMSG.innerHTML = "Please provide a valid email";
    }
    else{
        emailInput.removeAttribute('style');
        emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
        errorMSG.innerHTML = "";
    }
});
