var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillBtn = document.querySelector(".radioBillAddBtn");
var callTotal2 = document.querySelector(".callTotalTwo");
var smsTotal2 = document.querySelector(".smsTotalTwo");
var total2 = document.querySelector(".totalTwo");

var radioBillFactory = textBillTotal();


function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {

        var billItemType = checkedRadioBtn.value;
        radioBillFactory.textBillAdd(billItemType);

        var radioTotal = radioBillFactory.textBillEntered();
        var radioColor = radioBillFactory.color(radioTotal.totalOfTextBill);

        callTotal2.innerHTML = radioTotal.callOfTextBill.toFixed(2);
        smsTotal2.innerHTML = radioTotal.smsOfTextBill.toFixed(2);
        total2.innerHTML = radioTotal.totalOfTextBill.toFixed(2);

        total2.classList.remove("warning");
        total2.classList.remove("danger");
        if (radioColor != "") {
            total2.classList.add(radioColor)
        };
    };
};

radioBillBtn.addEventListener('click', radioBill);