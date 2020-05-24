var callGrandTotal = document.querySelector(".callTotalSettings");
var smsGrandTotal = document.querySelector(".smsTotalSettings");
var grandTotal = document.querySelector(".totalSettings");


var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsButton = document.querySelector(".updateSettings");
var settingsAddButton = document.querySelector(".add")


var settingsOfFactory = SettingsFactoryFunction()


function updateTotal() {
    var input = {
        callSetting: callCostSettingElement.value,
        smsSetting: smsCostSettingElement.value,
        warningSetting: warningLevelSetting.value,
        criticalSetting: criticalLevelSetting.value
    };
    settingsOfFactory.updateValues(input);
    var colorTicked = settingsOfFactory.getColorLive();
    grandTotal.classList.remove("warning");
    grandTotal.classList.remove("danger");
    if (colorTicked != "") {
        grandTotal.classList.add(colorTicked);
    }
}

function calculatedSettingsTotal() {
    var checkedSettingButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingButton) {
        var billItemType = checkedSettingButton.value
        settingsOfFactory.addFunction(billItemType);
        var colorTicked = settingsOfFactory.getColorLive();
        callGrandTotal.innerHTML = settingsOfFactory.settingsBillTotals().callTotalSettings.toFixed(2);
        smsGrandTotal.innerHTML = settingsOfFactory.settingsBillTotals().smsTotalSettings.toFixed(2);
        grandTotal.innerHTML = settingsOfFactory.settingsBillTotals().totalSettings.toFixed(2);
        grandTotal.classList.remove("warning");
        grandTotal.classList.remove("danger");
        if (colorTicked != "") {
            grandTotal.classList.add(colorTicked);
        }
    }
}


updateSettingsButton.addEventListener("click", updateTotal);
settingsAddButton.addEventListener("click", calculatedSettingsTotal);