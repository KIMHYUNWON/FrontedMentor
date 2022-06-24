let facebook = document.querySelector(".facebook");
let instagram = document.querySelector(".instagram");
let twitter = document.querySelector(".twitter");
let pinterest = document.querySelector(".pinterest");

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("#menu");

facebook.addEventListener("mouseover",() => facebook.src="images/icon-facebook-hover.svg");
facebook.addEventListener("mouseout", () => facebook.src="images/icon-facebook.svg");

instagram.addEventListener("mouseover", () => instagram.src = "images/icon-instagram-hover.svg");
instagram.addEventListener("mouseout", () => instagram.src = "images/icon-instagram.svg");

twitter.addEventListener("mouseover", () => twitter.src = "images/icon-twitter-hover.svg");
twitter.addEventListener("mouseout", () => twitter.src = "images/icon-twitter.svg");

pinterest.addEventListener("mouseover", () => pinterest.src = "images/icon-pinterest-hover.svg");
pinterest.addEventListener("mouseout", () => pinterest.src = "images/icon-pinterest.svg");

hamburger.isClick = false;
hamburger.addEventListener("click", function(){
    if(!hamburger.isClick){
        hamburger.isClick = true;
        menu.style.display = "block";
    }
    else{
        hamburger.isClick = false;
        menu.style.display = "none";
    }
})