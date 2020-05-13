function TextBill() {
    //SETTING THE VALUES COUNTER
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
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
    //SMS COST
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

    //MAKING A CALL
    function makeACall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += theCallCost
        }
    }
    function getTotalCallCost() {
        return callCostTotal
    }
    //MAKING AN SMS
    function makeSms() {
        if (!hasReachedCriticalLevel()) {
            smsCostTotal += theSmsCost
        }
    }
    function getTotalSmsCost() {
        return smsCostTotal
    }
    //THE TOTAL COST OF BOTH THE SMS AND CALLS
    function getTotalCost() {
        return smsCostTotal + callCostTotal
    }
    //USING THE WARNING AND CRITICAL LEVELS

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel()
    }
    function totalClassName() {
        if (hasReachedCriticalLevel()) {
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
        makeACall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        makeSms,
        //USING/SETTING THE WARNING & CRITICAL
        totalClassName
    }
}