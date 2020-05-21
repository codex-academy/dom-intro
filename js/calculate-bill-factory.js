function CalculateBill() {
    //SETTING THE VALUES COUNTER
    var theCallCost = 2.75
    var theSmsCost = 0.75
    var theWarningLevel = 20;
    var theCriticalLevel = 30;
    //USING THE VALUES COUNTER
    var callCostTotal = 0
    var smsCostTotal = 0;

    //THE CALL COST
    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost
    }
    //THE SMS COST
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost
    }
    //THE WARNING LEVEL
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel
    }

    function getWarningLevel() {
        return theWarningLevel
    }
    //THE CRITICAL LEVEL
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel
    }
    function getCriticalLevel() {
        return theCriticalLevel
    }
    //USING THE SET VALUES


    //calls are inputed 
    function callString() {
        callCostTotal += theCallCost
    }
    //total for calls
    function getTotalCallCost() {
        return callCostTotal
    }
    //sms is inputed 
    function smsString() {
        smsCostTotal += theSmsCost
    }
    //total for sms
    function getTotalSmsCost() {
        return smsCostTotal
    }
    //THE TOTAL COST OF BOTH THE SMS AND CALLS
    function getTotalCost() {
        return smsCostTotal + callCostTotal
    }
    //USING THE WARNING AND CRITICAL LEVELS


    function totalClassName() {
        if (getTotalCost() >= getCriticalLevel()) {
            return "critical"
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }
    }
    return {
        //SETTING THE VALUES
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        //USING THE VALUES
        callString,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        smsString,
        //USING/SETTING THE WARNING & CRITICAL
        totalClassName
    }
}