var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillBtn = document.querySelector(".radioBillAddBtn");
var callTotal2 = document.querySelector(".callTotalTwo");
var smsTotal2 = document.querySelector(".smsTotalTwo");
var total2 = document.querySelector(".totalTwo");

function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
    if (billItemType === 'call') {
        totalCalls += 2.75;
    } else if (billItemType === 'sms') {
        totalSms += 0.75;
    }
    callTotal2.innerHTML = totalCalls.toFixed(2);
    smsTotal2.innerHTML = totalSms.toFixed(2);
    var costTotal = totalCalls + totalSms;
    total2.innerHTML = costTotal.toFixed(2)
    if (costTotal >= 50) {
        total2.classList.add("danger");
    } else if (costTotal >= 30) {
        total2.classList.add("warning");
    }
}
var totalCalls = 0;
var totalSms = 0;

radioBillBtn.addEventListener('click', radioBill);