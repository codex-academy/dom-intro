// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callTotal2 = document.querySelector(".callTotalTwo");
var smsTotal2 = document.querySelector(".smsTotalTwo");
var total2 = document.querySelector(".totalTwo");

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var radio = RadioBillBtn()

function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value



    if (billItemType === 'call') {
        radio.selectCall()
    }
    else if (billItemType === 'sms') {
        radio.selectSms()
    }
    callTotal2.innerHTML = radio.getTotalCallCost().toFixed(2);
    smsTotal2.innerHTML = radio.getTotalSmsCost().toFixed(2);
   total2.innerHTML = radio.getTotalCost().toFixed(2);
    
    if (radio.getTotalCost() >= 50) {
        total2.classList.add("danger");
    }
    else if (radio.getTotalCost() >= 30) {
        total2.classList.add("warning");
    }
}

//add an event listener for when the add button is pressed
radioBillBtn.addEventListener('click', radioBill);
