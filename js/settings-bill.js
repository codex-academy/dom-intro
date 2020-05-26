//getting reference to the dom elements
var callGrandTotal = document.querySelector(".callTotalSettings");
var smsGrandTotal = document.querySelector(".smsTotalSettings");
var grandTotal = document.querySelector(".totalSettings");


var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsButton = document.querySelector(".updateSettings");
var settingsAddButton = document.querySelector(".settingsBillBtn")

//linking the factory to the dom

var billSettings = BillWithSettings();

function settingsBillTotal() {

    billSettings.setCallCost(Number(callCostSettingElement.value))
    billSettings.setSmsCost(Number(smsCostSettingElement.value))
    billSettings.setWarningLevel(Number(warningLevelSetting.value))
    billSettings.setCriticalLevel(Number(criticalLevelSetting.value))
    colorCode()

}

function calculateSettingsTotal() {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
       if(checkedSettingsBtn){
        var billItemType = checkedSettingsBtn.value

        if(billItemType === "call"){
            billSettings.makeCall()
        }
        if(billItemType === "sms"){
            billSettings.sendSms()
        }

        colorCode()
        callGrandTotal.innerHTML = (billSettings.getTotalCallCost()).toFixed(2)
        smsGrandTotal.innerHTML = (billSettings.getTotalSmsCost()).toFixed(2);
        grandTotal.innerHTML = (billSettings.getTotalCost()).toFixed(2);
    }
}

function colorCode(){
    grandTotal.classList.remove("danger");
    grandTotal.classList.remove("warning");
  
    grandTotal.classList.add(billSettings.totalClassName());
}

updateSettingsButton.addEventListener("click", settingsBillTotal);
settingsAddButton.addEventListener("click", calculateSettingsTotal);