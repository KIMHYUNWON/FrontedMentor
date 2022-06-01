let que = document.querySelectorAll(".que");
let ans = document.querySelectorAll(".ans");
let img = document.querySelectorAll(".que img");

for(let i = 0; i < que.length; i++){
    que[i].addEventListener("click", function(event){
        if(this.isClick == true){
            this.style.color = "hsl(240, 6%, 50%)";
            this.style.fontWeight = "400";
            ans[i].style.display = "none";
            img[i].style.transform = "rotate(0)";
            this.isClick = false;
        }else{
            this.style.color = "hsl(237, 12%, 33%)";
            this.style.fontWeight ="700";
            ans[i].style.display = "block";
            img[i].style.transform = "rotate(180deg)";
            this.isClick = true;
        }    
    });
}