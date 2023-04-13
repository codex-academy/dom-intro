//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'

// * add the appropriate value to the running total

// * add nothing for invalid values that is not 'call' or 'sms'.

// * display the latest total on the screen

const myText1 = document.querySelector(".billTypeText");
// get a reference to the textbox where the bill type is to be entered

const myButton1 = document.querySelector(".addToBillBtn");
//get a reference to the add button
const callsTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCostElem = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){

    var billTypeEntered = myText1.value.trim();
  
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    
    var totalCost = callsTotal + smsTotal;

    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        
                totalCostElem.classList.add("danger");  
            }
            else if (totalCost >= 30){
                 totalCostElem.classList.add("warning");
            }
}

myButton1.addEventListener("click" , textBillTotal)



