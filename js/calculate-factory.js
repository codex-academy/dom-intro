function calculateBtnClicked() {
    function addNewBill(billString) {
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        switch (billItem) {
                case "call":
                    total += 2.75;
                    break;
                case "sms":
                    total += 0.75;
                    break;
                }
            }
            return billTotal.tofixed(2);
    }
    function getColor(item) {
        if (item > 20 && item < 30) {
            return "warning";
        } else if (item >= 30) {
            return "danger";
        } else {
            return "";
        }
    }

    return {
        add: addNewBill,
        color: getColor
    }
}