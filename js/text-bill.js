var billTypeTextElement = document.querySelector(".billTypeText")
var addToBillBtn = document.querySelector(".addToBillBtn");
var totalOneElement = document.querySelector(".totalOne")
var callsTotalElement = document.querySelector(".callTotalOne")
var smsTotalElement = document.querySelector(".smsTotalOne")

var textBillFactory = textBillTotal();

function textBillTotals() {
    var billTypeTextEl = billTypeTextElement.value;

    textBillFactory.textBillAdd(billTypeTextEl);
    var totalOfAll = textBillFactory.textBillEntered();
    var colorTotal = textBillFactory.color();

    callsTotalElement.innerHTML = totalOfAll.callOfTextBill.toFixed(2);
    smsTotalElement.innerHTML = totalOfAll.smsOfTextBill.toFixed(2);
    totalOneElement.innerHTML = totalOfAll.totalOfTextBill.toFixed(2);


    totalOneElement.classList.remove("warning")
    totalOneElement.classList.remove("danger")
    if (colorTextTotal != "") {
        totalOneElement.classList.add(colorTotal)
    }
}

addToBillBtn.addEventListener('click', textBillTotals);