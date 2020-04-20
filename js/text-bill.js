//get a reference to the add button
var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");

var totalOneElement = document.querySelector(".totalOne")

//calls total
var callsTotalElement = document.querySelector(".callTotalOne")
//sms total
var smsTotalElement = document.querySelector(".smsTotalOne")
//initial call total 
var callsTotal = 0;
//initial sms total
var smsTotal = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'

function textBillTotal() {
    var billItem = billTypeTextElement.value;
    if (billItem === "call") {
        callsTotal += 2.75
    } else if (billItem === "sms") {
        smsTotal += 0.75;
    }
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var total = callsTotal + smsTotal;
    totalOneElement.innerHTML = total.toFixed(2);

    if (total >= 50) {
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    } else if (total >= 30) {
        totalOneElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener("click", textBillTotal);