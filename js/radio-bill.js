// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const myText2 = document.querySelector(".billItemTypeRadio");

const myButton2 = document.querySelector(".radioBillAddBtn"); 

const callsTotalElem2 = document.querySelector(".callTotalTwo");

const smsTotalElem2 = document.querySelector(".smsTotalTwo");

const totalCostElem2 = document.querySelector(".totalTwo");

var callsTotal2 = 0;
var smsTotal2 = 0;


function textBillTotal2() {

    var billTypeEntered2 = myText2.value;

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billTypeEntered2 = checkedRadioBtn.value
  
}

    if (billTypeEntered2 === "call") {
        callsTotal2 += 2.75
    }
    else if (billTypeEntered2 === "sms") {
        smsTotal2 += 0.75;
    }

    callsTotalElem2.innerHTML = callsTotal2.toFixed(2);
    smsTotalElem2.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalCostElem2.innerHTML = totalCost2.toFixed(2);
   
    if (totalCost2 >= 50){
        
        totalCostElem2.classList.add("danger");  
    }
    else if (totalCost2 >= 30){
         totalCostElem2.classList.add("warning");
    }
}
   
myButton2.addEventListener("click", textBillTotal2);


