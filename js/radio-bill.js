const billItemTypeRadio  = document.querySelector(".billItemTypeRadio")
const totalTwo  = document.querySelector(".totalTwo")


// get a reference to the sms or call radio buttons
const callTotalTwo  = document.querySelector(".callTotalTwo")
const smsTotalTwo  = document.querySelector(".smsTotalTwo")
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
var totalCall = 0;
var totalSms  = 0;
//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", radioBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
function radioBillTotal(){

var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
   
    if(billItemType === "call"){
        totalCall += 2.75
    }
    else if(billItemType === "sms"){
        totalSms += 0.75
    }

}
  
// * add the appropriate value to the running total

callTotalTwo.innerHTML = totalCall.toFixed(2);
smsTotalTwo.innerHTML = totalSms.toFixed(2);
    var totalCost = totalCall + totalSms;
    totalTwo.innerHTML = totalCost.toFixed(2);
    if(totalCost > 50 ){
        totalTwo.classList.add("danger")
    }
    else if(totalCost > 30){
        totalTwo.classList.add("warning")
    }
}
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
