var billTypeTextElement = document.querySelector(".billTypeText")
var addToBillBtn = document.querySelector(".addToBillBtn");
var totalOneElement = document.querySelector(".totalOne")

var callsTotalElement = document.querySelector(".callTotalOne")
var smsTotalElement = document.querySelector(".smsTotalOne")
var callsTotal = 0;
var smsTotal = 0

function textBillTotal() {

    var bills = billTypeTextElement.value;
    if (bills === "call") {
        callsTotal += 2.75
    } else if (bills === "sms") {
        smsTotal += 0.75;
    }

    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);


    if (totalCost >= 50) {
        totalOneElement.classList.add("danger")
    } else if (totalCost >= 30) {
        totalOneElement.classList.add("warning")
    }
}

addToBillBtn.addEventListener('click', textBillTotal);