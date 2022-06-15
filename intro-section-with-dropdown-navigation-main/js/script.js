"use strict";


let sub_page = document.querySelector("#page2");
let logo_menu = document.querySelector(".menu");
let close_button = document.querySelector(".close");

logo_menu.addEventListener("click", function(){
    sub_page.style.display = "block";
});

close_button.addEventListener("click", function(){
    sub_page.style.display = "none";
});

let feature1 = document.querySelector("#feature1");
let company1 = document.querySelector("#company1");

let sub_feature1 = document.querySelector(".sub_feature1");
let sub_company1 = document.querySelector(".sub_company1");


let feature2 = document.querySelector("#feature2");
let company2 = document.querySelector("#company2");

let sub_feature2 = document.querySelector(".sub_feature2");
let sub_company2 = document.querySelector(".sub_company2");

feature1.isClick = false;
company1.isClick = false;

feature2.isClick = false;
company2.isClick = false;

feature1.addEventListener("click", function(){
    if(feature1.isClick == false){
        feature1.isClick = true;
        feature1.style.background = "url('./images/icon-arrow-up.svg') no-repeat 80%";
        sub_feature1.style.display = "block";
    }else{
        feature1.isClick = false;
        feature1.style.background = "url('./images/icon-arrow-down.svg') no-repeat 80%";
        sub_feature1.style.display = "none";
    }
});

company1.addEventListener("click", function(){
    if(company1.isClick == false){
        company1.isClick = true;
        company1.style.background = "url('./images/icon-arrow-up.svg') no-repeat 80%";
        sub_company1.style.display = "block";
    }else{
        company1.isClick = false;
        company1.style.background = "url('./images/icon-arrow-down.svg') no-repeat 80%";
        sub_company1.style.display = "none";
    }
});



feature2.addEventListener("click", function(){
    if(feature2.isClick == false){
        feature2.isClick = true;
        feature2.style.background = "url('./images/icon-arrow-up.svg') no-repeat 60% 5%";
        sub_feature2.style.display = "block";
    }else{
        feature2.isClick = false;
        feature2.style.background = "url('./images/icon-arrow-down.svg') no-repeat 60% 50%";
        sub_feature2.style.display = "none";
    }
});

company2.addEventListener("click", function(){
    if(company2.isClick == false){
        company2.isClick = true;
        company2.style.background = "url('./images/icon-arrow-up.svg') no-repeat 60% 7%";
        sub_company2.style.display = "block";
    }else{
        company2.isClick = false;
        company2.style.background = "url('./images/icon-arrow-down.svg') no-repeat 60% 50%";
        sub_company2.style.display = "none";
    }
});

