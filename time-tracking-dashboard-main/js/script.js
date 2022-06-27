let daily = document.querySelector("#daily");
let weekly = document.querySelector("#weekly");
let monthly = document.querySelector("#monthly");
let current = document.querySelectorAll(".current");
let previous = document.querySelectorAll(".previous");

let xhttp = new XMLHttpRequest();
let arr;
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
        myfunc(xhttp.responseText);
};

xhttp.open("GET", "data.json", true);
xhttp.send();

function myfunc(resp){
    arr = JSON.parse(resp);
    daily.addEventListener("click",function(){
        for(let i = 0; i < current.length; i++){
            current[i].innerHTML = `${arr[i]["timeframes"]["daily"]["current"]}hrs`;
            previous[i].innerHTML = `Last Week - ${arr[i]["timeframes"]["daily"]["previous"]}hrs`;
        }
      });
    monthly.addEventListener("click", function(){
        for(let i = 0; i < current.length; i++){
            current[i].innerHTML = `${arr[i]["timeframes"]["monthly"]["current"]}hrs`;
            previous[i].innerHTML = `Last Week - ${arr[i]["timeframes"]["monthly"]["previous"]}hrs`;
        }
    });

    weekly.addEventListener("click", function(){
        for(let i = 0; i < current.length; i++){
            current[i].innerHTML = `${arr[i]["timeframes"]["weekly"]["current"]}hrs`;
            previous[i].innerHTML = `Last Week - ${arr[i]["timeframes"]["weekly"]["previous"]}hrs`;
        }
    });
}