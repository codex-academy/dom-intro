const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal")
const billStringField = document.querySelector(".billString")
const billTotalSpanElement = document.querySelector(".total")

var factory = calculateBtnA();

function calculateBtnClicked() {

    var roundedBillTotal = factory.add(billStringField.value);

    billTotalElement.innerHTML = roundedBillTotal;

    var newColor = factory.color(roundedBillTotal);
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
    if (newColor !== "") {
        billTotalElement.classList.add(newColor);
    }
}

calculateBtn.addEventListener("click", calculateBtnClicked);