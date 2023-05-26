

const callTotalOne = document.querySelector(".callTotalOne")
const smsTotalOne = document.querySelector(".smsTotalOne")
const totalOne = document.querySelector(".totalOne")


// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText")
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
//addToBillBtn.addEventListener('click', addToBillBtn);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
function textBillTotal(){
    var billTypeEntered = billTypeText.value.toLowerCase().trim();
   // console.log(billTypeEntered)
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
// * add the appropriate value to the running total
callTotalOne.innerHTML = callsTotal.toFixed(2);
smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);

    if(totalCost > 50){
        totalOne.classList.add("danger")
    }
    else if(totalCost > 30){
        totalOne.classList.add("warning")
    }
    
}

addToBillBtn.addEventListener('click', textBillTotal);
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen