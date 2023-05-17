function calculateBtnClicked() {
 
  
  function setCallOrSms(data) {
     var billTotal = 0;
 

    var billItems = data.split(",");
    for (var i = 0; i < billItems.length; i++) {
      if (billItems[i].trim().toLowerCase() === "call") {
        billTotal += 2.75;
      } else if (billItems[i].trim().toLowerCase() === "sms") {
        billTotal += 0.75;
      }
    }
    return billTotal
  }
 

  function warningLevel() {
    if (billTotal > 20 && billTotal < 30) {
      return "warning";
    }
  }

  function criticalLevel() {
    if (billTotal > 30) {
      return "danger";
    }
  }

  return {
    setCallOrSms,
    warningLevel,
    criticalLevel,
  };
}