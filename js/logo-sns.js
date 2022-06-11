let facebook = document.querySelector(".facebook");
let twitter = document.querySelector(".twitter");
let instagram = document.querySelector(".instagram");

facebook.addEventListener("mouseover", function(){
    facebook.src = "./images/logo-facebook-hover.svg";
});
facebook.addEventListener("mouseout", function(){
    facebook.src="./images/logo-facebook.svg";
});
twitter.addEventListener("mouseover", function(){
    twitter.src = "./images/logo-twitter-hover.svg";
});
twitter.addEventListener("mouseout", function(){
    twitter.src = "./images/logo-twitter.svg";
});
instagram.addEventListener("mouseover", function(){
    instagram.src="./images/logo-instagram-hover.svg";
});
instagram.addEventListener("mouseout", function(){
    instagram.src="./images/logo-instagram.svg";
});