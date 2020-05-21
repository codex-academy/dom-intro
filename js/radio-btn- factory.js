function RadioBillBtn() {
    //SETTING THE VALUES COUNTER
    var theCallCost = 2.75
    var theSmsCost = 0.75
    var theWarningLevel = 30
    var theCriticalLevel = 50
    //USING THE VALUES COUNTER 
    var callCostTotal = 0
    var smsCostTotal = 0
    //SETTING & GETTING THE CALL COST
    function setCallCost(callCost) {
        theCallCost = callCost
    }
    function getCallCost() {
        return theCallCost
    }
    //SETTING & GETTING THE SMS COST
    function setSmsCost(smsCost) {
        theSmsCost = smsCost
    }
    function getSmsCost() {
        return theSmsCost
    }
    //SETTING & GETTING THE WARNING LEVEL
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel
    }
    function getWarningLevel() {
        return theWarningLevel
    }
    //SETTING & GETTING THE CRITICAL LEVEL
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel
    }
    function getCriticalLevel() {
        return theCriticalLevel
    }
    //MAKING A CALL
    function selectCall() {
        callCostTotal += theCallCost
    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal
    }
    function getTotalCallCost() {
        return callCostTotal
    }
    function getTotalSmsCost() {
        return smsCostTotal
    }
    //MAKING AN SMS
    function selectSms() {
        smsCostTotal += theSmsCost
    }
    //USING THE  WARNING & CRITICAL LEVELS

    function totalClassName() {
        if (getTotalCost() >= getCriticalLevel()) {
            return "critical"
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }
    }
    return {
        //SETTING THE CALL COST
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        selectCall,
        getTotalCost,
        getTotalSmsCost,
        getTotalCallCost,
        selectSms,
        totalClassName
    }
}