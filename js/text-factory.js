function textBillTotal() {

    var totalOfTotal = 0.00;
    var callsTotal = 0;
    var smsTotal = 0;

    function addToTotal(item) {
        if (item != "" && item != null) {
            switch (item) {
                case "call":
                    callsTotal += 2.75;
                    totalOfTotal += 2.75;
                    break;
                case "sms":
                    smsTotal += 0.75;
                    totalOfTotal += 0.75;
                    break;
                default:
                    return false
            };
            return true;
        }
        return false;
    }

    function allTotalsSelected() {
        return {
            totalOfTextBill: parseFloat(totalOfTotal),
            callOfTextBill: parseFloat(callsTotal),
            smsOfTextBill: parseFloat(smsTotal)
        };
    }

    function getColor() {
        if (totalOfTotal >= 30 && totalOfTotal < 50) {
            return "warning";
        } else if (totalOfTotal >= 50) {
            return "danger";
        } else {
            return "";
        }
    }

    return {
        textBillAdd: addToTotal,
        textBillEntered: allTotalsSelected,
        color: getColor
    }
}