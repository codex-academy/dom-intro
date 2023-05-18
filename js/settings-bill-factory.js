function BillWithSettings() {
  var theCallCost = 0;
  var theSmsCost = 0;
  var theWarningLevel = 0;
  var theCriticalLevel = 0;
  var callCostTotal = 0;
  var smsCostTotal = 0;

  function setCallCost(callCost) {
    theCallCost = callCost;
  }
  function getCallCost() {
    return theCallCost;
  }
  function setSmsCost(smsCost) {
    theSmsCost = smsCost;
  }
  function getSmsCost() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel = warningLevel;
  }
  function getWarningLevel() {
    return theWarningLevel;
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel = criticalLevel;
  }
  function getCriticalLevel() {
    return theCriticalLevel;
  }
  function makeCall() {
    if(!reachedDanger()){
    callCostTotal += theCallCost;
  }
}
  function getTotalCost() {
    return callCostTotal + smsCostTotal;
  }
  function getTotaCalllCost() {
    return callCostTotal;
  }
  function getTotalSmsCost() {
    return smsCostTotal;
  }
  function sendSms() {
    if(!reachedDanger()){
      smsCostTotal += theSmsCost;
    }
   
  }

  function reachedDanger(){
    return getTotalCost() >= getCriticalLevel()
  }

  function totalClassName() {
    if (
      getTotalCost() >= getWarningLevel() &&
      getTotalCost() < getCriticalLevel()
    ) {
      return "warning";
    }
    if (reachedDanger()){
      return "danger";
    }
  }
  return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    getTotalCost,
    getTotaCalllCost,
    getTotalSmsCost,
    sendSms,
    totalClassName,
    reachedDanger
  };
}
