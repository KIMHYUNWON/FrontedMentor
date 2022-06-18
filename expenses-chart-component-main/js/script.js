"use_strict";

let graph = document.querySelectorAll(".graph");
let day_spending = document.querySelectorAll(".day_spending");
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
        myfunc(xhttp.responseText);
};

xhttp.open("GET", "data.json", true);
xhttp.send();

function myfunc(resp){
  let arr = JSON.parse(resp);
  
  for(let i = 0; i < graph.length; i++){
    graph[i].style.height = `${arr[i].amount/80*100}%`;
  }
  for(let i = 0; i < graph.length; i++){
    day_spending[i].innerText = `$${arr[i].amount}`;
  }
}

for(let i = 0 ; i < graph.length; i++){
  graph[i].addEventListener("mouseover", function(){
    day_spending[i].style.display = "block";
  })
  graph[i].addEventListener("mouseout", function(){
    day_spending[i].style.display = "none";
  })
}
