"use strict";

let billInput = document.querySelector("#billInput");
let numberInput = document.querySelector("#numberInput");
let zero_message = document.querySelector(".zero_message");
let tipsNoCustom = document.querySelectorAll("#tip li:not(:last-child)");
let tips = document.querySelectorAll("#tip li");
let tipCustom = document.querySelector(".custom");
let tipAmount = document.querySelector("#tipAmount");
let total = document.querySelector("#total");
let reset = document.querySelector("#reset");

let bill;
let selectedTip;
let number;

tipCustom.onclick = function(){
    tipCustom.placeholder = "";
    for(let tip of tipsNoCustom){
        tip.isClick = false;
        tip.style.backgroundColor = "";
        tip.style.color = "";
        tip.style.filter = "";
    }
};

tipCustom.onchange = function(){
    if((+tipCustom.value) >= 0){
        tips.click = tipCustom.value;
        bill = billInput.value;
        number = numberInput.value;
        selectedTip = tips.click;
        activeReset();
        if(selectedTip != null && number > 0){
            let value1 = (+bill) * selectedTip / 100 / number;
            tipAmount.innerHTML = `$${(value1.toFixed(2)) }`; 
            let value2 = (+bill) * (selectedTip /100 + 1) / number;
            total.innerHTML =`$${value2.toFixed(2)}`;
        }else{
            tipAmount.innerHTML = "$0.00"; 
            total.innerHTML = "$0.00";
        }
    }
}
tipCustom.onblur = function(){
    if(tipCustom < 0 || tipCustom == ""){
        tips.click = null;
    }
    tipCustom.placeholder = "Custom";
}

for(let tip of tipsNoCustom){
    tip.isClick = false;
    tip.onclick = function(){
        if(!tip.isClick){
            for(let otherTip of tips){
                if(otherTip != tip){
                    otherTip.isClick = false;
                    otherTip.style.backgroundColor = "";
                    otherTip.style.color = "";
                    otherTip.style.filter = "";
                    tipCustom.value = "";
                }
            }
            tip.isClick = true;
            tips.click = parseInt(tip.innerHTML);
            tip.style.backgroundColor = "hsl(172, 67%, 45%)";
            tip.style.color = "hsl(183, 100%, 15%)";
            tip.style.filter = "brightness(1.2)";
            bill = billInput.value;
            number = +(numberInput.value);
            selectedTip = tips.click;
            activeReset();
            if(tip != null && number > 0 ){
                let value1 = (+bill) * selectedTip / 100 / number;
                tipAmount.innerHTML = `$${(value1.toFixed(2)) }`;
                let value2 = (+bill) * (selectedTip /100 + 1) / number;
                total.innerHTML =`$${value2.toFixed(2)}`; 
            }else{
                tipAmount.innerHTML = "$0.00"; 
                total.innerHTML = "$0.00";
            }

        }else{
            tip.isClick = false;
            tips.click = null;
            tip.style.backgroundColor = "";
            tip.style.color = "";
            tip.style.filter = "";
        }
    }
}

numberInput.onkeyup = function(){
    if(numberInput.value === "0"){
        numberInput.style.outline = "2px solid rgb(217, 80, 80)";
        zero_message.style.display = "block";
    }else{
        numberInput.style.outline = "";
        zero_message.style.display = "";
    }
};


billInput.onchange = function(){
    bill = billInput.value;
    number = +(numberInput.value);
    selectedTip = tips.click;
    activeReset();
    if(selectedTip != null && number > 0){
        let value1 = (+bill) * selectedTip / 100 / number;
        tipAmount.innerHTML = `$${(value1.toFixed(2)) }`;
        let value2 = (+bill) * (selectedTip /100 + 1) / number;
        total.innerHTML =`$${value2.toFixed(2)}`;   
    }else{
        tipAmount.innerHTML = "$0.00"; 
        total.innerHTML = "$0.00";
    }
    
}

numberInput.onchange = function(){
    number = +(numberInput.value);
    bill = +(billInput.value);
    selectedTip = tips.click;
    activeReset();
    if(selectedTip != null && number > 0){
        let value1= (+bill) * selectedTip / 100 / number;
        tipAmount.innerHTML = `$${(value1.toFixed(2)) }`; 
        let value2 = (+bill) * (selectedTip /100 + 1) / number;
        total.innerHTML =`$${value2.toFixed(2)}`;
    }else{
        tipAmount.innerHTML = "$0.00"; 
        total.innerHTML = "$0.00";
    }
}

function activeReset(){
    if(bill > 0 && selectedTip > 0 && number > 0){
        reset.style.opacity = "1";
        reset.onmouseover = function(){
            reset.style.filter = "brightness(1.3)";
        };
        reset.onmouseout = function(){
            reset.style.filter = ""
        };
        reset.onclick = function(){
            for(let tip of tips){
                tip.isClick = false;
                tip.style.backgroundColor = "";
                tip.style.color = "";
                tip.style.filter = "";
                tips.click = null;
                tipCustom.value = "";
            }
            reset.style.opacity = "0.3";
            reset.onmouseover = "";
            reset.onmouseout = "";
            reset.onclick = "";

            billInput.value = "";
            numberInput.value = "";
            tipAmount.innerHTML = "$0.00"; 
            total.innerHTML = "$0.00";
        }
    }

};


