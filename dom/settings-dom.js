
var callGrandTotal = document.querySelector(".callTotalSettings");
var smsGrandTotal = document.querySelector(".smsTotalSettings");
var grandTotal = document.querySelector(".totalSettings");


var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsButton = document.querySelector(".updateSettings");
var settingsAddButton = document.querySelector(".settingsBillBtn")

var billSettings = BillWithSettings();

var callTotalSettings = 0;
var smsTotalSettings = 0;
var totalSettings = 0;


var callCostValue = 0;
var smsCostValue = 0;
var warningLevelValue = 0;
var criticalLevelValue = 0;




function settingsBillTotal() {

    billSettings.setCallCost(callCostSettingElement.value)
    callCostValue = billSettings.getCallCost()

    billSettings.setSmsCost(smsCostSettingElement.value)
    smsCostValue = billSettings.getSmsCost()

    billSettings.setWarningLevel(warningLevelSetting)
    warningLevelValue = billSettings.getWarningLevel()

    billSettings.setCriticalLevel(criticalLevelSetting)
    criticalLevelValue = billSettings.getCriticalLevel()
}

function calculateSettingsTotal() {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingsBtn) {


        var billItemType = checkedSettingsBtn.value
        if (billItemType === "call") {
            callCostValue += billSettings.makeCall()
            alert(billSettings.makeCall())
        }
        if (billItemType === "sms") {
            smsCostValue += billSettings.makeSms()
        }
        

        // changeTotalColor(totalSettings, warningLevelValue, criticalLevelValue)
        // callGrandTotal.innerHTML = callTotalSettings.toFixed(2);
        // smsGrandTotal.innerHTML = smsTotalSettings.toFixed(2);
        // grandTotal.innerHTML = totalSettings.toFixed(2);
    }
}


updateSettingsButton.addEventListener("click", settingsBillTotal);
settingsAddButton.addEventListener("click", calculateSettingsTotal);