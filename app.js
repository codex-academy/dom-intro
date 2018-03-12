var calculateBtn = document.querySelector('.calculateBtn');
var billTotalElem = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');

var billTotal = 0;

function totalBill(){
  var billElements = billString.value.split(",");
  billTotal = 0;
  billElements.forEach(function(element){
    var trimmedElement = element.trim();
    if (trimmedElement === "call"){
      billTotal += 2.75
    }
    else if (trimmedElement === "sms"){
      billTotal += 0.75;
    }
  });

  billTotalElem.innerHTML = billTotal.toFixed(2);
}

calculateBtn.addEventListener("click", totalBill);
