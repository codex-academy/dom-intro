//get a reference to the add button
var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");

var totalOneElement = document.querySelector(".totalOne")

//calls total
var callsTotalElement = document.querySelector(".callTotalOne")
//sms total
var smsTotalElement = document.querySelector(".smsTotalOne")

var theBill = TextBill()

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'

function textBillTotal() {
    var billItem = billTypeTextElement.value;
    if (billItem === "call") {
        theBill.inputCall()
    } else if (billItem === "sms") {
        theBill.inputSms()
    }
    callsTotalElement.innerHTML = theBill.getTotalCallCost()
    smsTotalElement.innerHTML = theBill.getTotalSmsCost()
    var total = theBill.getTotalSmsCost() + theBill.getTotalCallCost()
    totalOneElement.innerHTML = total.toFixed(2)

    if (total >= 50) {
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    } else if (total >= 30) {
        totalOneElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener("click", textBillTotal);