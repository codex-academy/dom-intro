var callAllTotal = document.querySelector(".callTotalSettings");
var smsAllTotal = document.querySelector(".smsTotalSettings");
var grandTotal = document.querySelector(".totalSettings");
var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
var updateSettingsButton = document.querySelector(".updateSettings");
var settingsAddButton = document.querySelector(".add")
var callTotalSettings = 0.00;
var smsTotalSettings = 0.00;
var totalSettings = 0.00;
var callCostValue = 0.00;
var smsCostValue = 0.00;
var warningLevelValue = 0.00;
var criticalLevelValue = 0.00;


function settingsBillTotal() {
    callCostValue = Number(callCostSettingElement.value);
    smsCostValue = Number(smsCostSettingElement.value);
    warningLevelValue = Number(warningLevel.value);
    criticalLevelValue = Number(criticalLevel.value);
    changeTotalColor(smsCostValue, warningLevelValue, criticalLevelValue)

}

function calculateSettingsTotal() {
    var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedSettingsBtn) {
        var billItemType = checkedSettingsBtn.value
        if (totalSettings < criticalLevelValue) {
            switch (billItemType) {
                case "call":
                    totalSettings += callCostValue;
                    callTotalSettings += callCostValue;

                    break;
                case "sms":
                    totalSettings += smsCostValue;
                    smsTotalSettings += smsCostValue;
                    break;
            };

            changeTotalColor(totalSettings, warningLevelValue, criticalLevelValue)
            callAllTotal.innerHTML = callTotalSettings.toFixed(2);
            smsAllTotal.innerHTML = smsTotalSettings.toFixed(2);
            grandTotal.innerHTML = totalSettings.toFixed(2);
        }
    }

}

function changeTotalColor(currentTotal, currentWarning, currentCritical) {
    if (currentTotal >= currentWarning && currentTotal < currentCritical) {
        grandTotal.classList.remove("danger");
        grandTotal.classList.add("warning");
    } else if (currentTotal >= currentCritical) {
        grandTotal.classList.remove("warning");
        grandTotal.classList.add("danger");
    } else {
        grandTotal.classList.remove("warning");
        grandTotal.classList.remove("danger");
    }

}

updateSettingsButton.addEventListener("click", settingsBillTotal);
settingsAddButton.addEventListener("click", calculateSettingsTotal);